import React, { useState, useEffect, useCallback } from 'react';
import {
  View, Text, ScrollView, StyleSheet, TouchableOpacity,
  ActivityIndicator, useWindowDimensions
} from 'react-native';
import type { Hive, HiveHistory } from '@/lib/types';
import { api } from '@/lib/api';
import { Colors, StatusColor } from '@/lib/colors';
import { LineChart } from '@/components/LineChart';
import { ErrorView } from '@/components/ErrorView';

type Metric = 'temperature' | 'weight' | 'co2';

const METRICS: { key: Metric; label: string; icon: string; unit: string; color: string }[] = [
  { key: 'temperature', label: 'Temperatura', icon: '🌡', unit: '°C', color: Colors.danger },
  { key: 'weight', label: 'Peso', icon: '⚖', unit: 'kg', color: Colors.forest },
  { key: 'co2', label: 'CO₂', icon: '💨', unit: 'ppm', color: Colors.honey },
];

export default function GraficosScreen() {
  const [hives, setHives] = useState<Hive[]>([]);
  const [selectedHive, setSelectedHive] = useState<string | null>(null);
  const [history, setHistory] = useState<HiveHistory | null>(null);
  const [metric, setMetric] = useState<Metric>('temperature');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { width } = useWindowDimensions();

  const loadHives = useCallback(() => {
    setError(false);
    setLoading(true);
    api.hives.list()
      .then(data => {
        setHives(data);
        if (data.length > 0) setSelectedHive(data[0].id);
        else setLoading(false);
      })
      .catch(() => { setError(true); setLoading(false); });
  }, []);

  useEffect(() => { loadHives(); }, [loadHives]);

  useEffect(() => {
    if (!selectedHive) return;
    setLoading(true);
    api.hives.history(selectedHive)
      .then(h => { setHistory(h); setError(false); })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [selectedHive]);

  const hive = hives.find(h => h.id === selectedHive);

  // Fallback automático: CO₂ indisponível em colmeias Starter
  useEffect(() => {
    if (metric === 'co2' && hive?.model === 'starter') {
      setMetric('temperature');
    }
  }, [hive, metric]);

  if (error && hives.length === 0) {
    return <ErrorView onRetry={loadHives} />;
  }

  if (!loading && hives.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.emptyIcon}>🍯</Text>
        <Text style={styles.noData}>Sem colmeias para mostrar gráficos.</Text>
      </View>
    );
  }

  const currentMetric = METRICS.find(m => m.key === metric)!;
  const chartData = history?.[metric] ?? [];
  const hasData = chartData.some(d => d.value > 0);

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.content}>
      {/* Hive selector */}
      <Text style={styles.sectionLabel}>Colmeia</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.selectorRow}>
        {hives.map(h => {
          const active = selectedHive === h.id;
          return (
            <TouchableOpacity
              key={h.id}
              activeOpacity={0.8}
              style={[styles.selectorChip, active && styles.selectorChipActive]}
              onPress={() => setSelectedHive(h.id)}
            >
              <View style={[styles.selectorDot, { backgroundColor: StatusColor[h.status] }]} />
              <Text style={[styles.selectorText, active && styles.selectorTextActive]}>
                {h.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Metric selector */}
      <Text style={styles.sectionLabel}>Métrica</Text>
      <View style={styles.metricRow}>
        {METRICS.map(m => {
          const isPro = m.key === 'co2';
          const disabled = isPro && hive?.model === 'starter';
          const active = metric === m.key;
          return (
            <TouchableOpacity
              key={m.key}
              activeOpacity={0.8}
              style={[
                styles.metricChip,
                active && { backgroundColor: m.color, borderColor: m.color },
                disabled && styles.metricChipDisabled,
              ]}
              onPress={() => !disabled && setMetric(m.key)}
              disabled={disabled}
            >
              <Text style={styles.metricIcon}>{m.icon}</Text>
              <Text style={[styles.metricText, active && styles.metricTextActive]}>
                {m.label}
              </Text>
              {disabled && (
                <View style={styles.proTag}>
                  <Text style={styles.proTagText}>PRO</Text>
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Chart */}
      <View style={[styles.chartCard, { borderLeftColor: currentMetric.color }]}>
        <Text style={styles.chartTitle}>
          {currentMetric.icon} {currentMetric.label}
        </Text>
        <Text style={styles.chartSubtitle}>Últimos 7 dias · {currentMetric.unit}</Text>
        {loading ? (
          <ActivityIndicator color={Colors.honey} style={{ marginVertical: 40 }} />
        ) : error ? (
          <View style={styles.chartError}>
            <Text style={styles.noData}>Erro ao carregar o histórico.</Text>
            <TouchableOpacity
              style={styles.retryBtn}
              onPress={() => selectedHive && setSelectedHive(selectedHive)}
            >
              <Text style={styles.retryText}>Tentar novamente</Text>
            </TouchableOpacity>
          </View>
        ) : hasData ? (
          <LineChart
            data={chartData}
            color={currentMetric.color}
            width={width - 64}
            height={180}
          />
        ) : (
          <Text style={styles.noData}>Sem dados disponíveis para esta métrica.</Text>
        )}
      </View>

      {/* Current values */}
      {hive && hive.status !== 'offline' && (
        <View style={styles.currentCard}>
          <Text style={styles.sectionLabel}>Valores actuais</Text>
          <View style={styles.currentRow}>
            <CurrentValue icon="🌡" label="Temp. interior" value={`${hive.sensors.tempInterior.toFixed(1)}°C`} color={Colors.danger} />
            <CurrentValue icon="⚖" label="Peso" value={`${hive.sensors.weight.toFixed(1)} kg`} color={Colors.forest} />
            {hive.model === 'pro' && hive.sensors.co2 !== null && (
              <CurrentValue icon="💨" label="CO₂" value={`${hive.sensors.co2} ppm`} color={Colors.honeyDark} />
            )}
          </View>
        </View>
      )}
    </ScrollView>
  );
}

function CurrentValue({ icon, label, value, color }: { icon: string; label: string; value: string; color: string }) {
  return (
    <View style={styles.currentItem}>
      <Text style={styles.currentIcon}>{icon}</Text>
      <Text style={[styles.currentValue, { color }]}>{value}</Text>
      <Text style={styles.currentLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: { backgroundColor: Colors.light },
  content: { padding: 16, paddingBottom: 40 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.light, gap: 10 },
  emptyIcon: { fontSize: 44 },
  sectionLabel: { fontSize: 11, fontWeight: '800', color: Colors.mid, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8, marginTop: 16 },

  selectorRow: { marginBottom: 4 },
  selectorChip: {
    flexDirection: 'row', alignItems: 'center', gap: 7,
    paddingHorizontal: 14, paddingVertical: 9, borderRadius: 999,
    backgroundColor: Colors.white, borderWidth: 1.5, borderColor: Colors.border,
    marginRight: 8,
  },
  selectorChipActive: { backgroundColor: Colors.dark, borderColor: Colors.dark },
  selectorDot: { width: 7, height: 7, borderRadius: 4 },
  selectorText: { fontSize: 13, color: Colors.mid, fontWeight: '600' },
  selectorTextActive: { color: Colors.honey, fontWeight: '700' },

  metricRow: { flexDirection: 'row', gap: 8, marginBottom: 4 },
  metricChip: {
    flex: 1, paddingVertical: 12, borderRadius: 14,
    backgroundColor: Colors.white, borderWidth: 1.5, borderColor: Colors.border,
    alignItems: 'center', gap: 2,
  },
  metricChipDisabled: { opacity: 0.45 },
  metricIcon: { fontSize: 18 },
  metricText: { fontSize: 12, fontWeight: '700', color: Colors.mid },
  metricTextActive: { color: Colors.white },
  proTag: {
    position: 'absolute', top: -7, right: -4,
    backgroundColor: Colors.honey, borderRadius: 6,
    paddingHorizontal: 5, paddingVertical: 1,
  },
  proTagText: { fontSize: 8, fontWeight: '800', color: Colors.dark, letterSpacing: 0.5 },

  chartCard: {
    backgroundColor: Colors.white, borderRadius: 20, padding: 18,
    marginTop: 16, borderLeftWidth: 4,
    shadowColor: Colors.dark, shadowOpacity: 0.08,
    shadowRadius: 10, shadowOffset: { width: 0, height: 3 }, elevation: 3,
  },
  chartTitle: { fontSize: 16, fontWeight: '800', color: Colors.charcoal },
  chartSubtitle: { fontSize: 11, color: Colors.mid, marginTop: 2, marginBottom: 12 },
  chartError: { alignItems: 'center', gap: 8 },
  retryBtn: {
    backgroundColor: Colors.honey, borderRadius: 10,
    paddingVertical: 8, paddingHorizontal: 18, marginBottom: 16,
  },
  retryText: { color: Colors.dark, fontWeight: '700', fontSize: 13 },
  noData: { textAlign: 'center', color: Colors.mid, marginVertical: 30, fontSize: 14 },

  currentCard: { marginTop: 4 },
  currentRow: { flexDirection: 'row', gap: 8 },
  currentItem: {
    flex: 1, backgroundColor: Colors.white, borderRadius: 16, padding: 14,
    alignItems: 'center', shadowColor: Colors.dark, shadowOpacity: 0.06,
    shadowRadius: 8, shadowOffset: { width: 0, height: 2 }, elevation: 2,
  },
  currentIcon: { fontSize: 22, marginBottom: 5 },
  currentValue: { fontSize: 18, fontWeight: '800' },
  currentLabel: { fontSize: 10, color: Colors.mid, marginTop: 3, textAlign: 'center', fontWeight: '600' },
});
