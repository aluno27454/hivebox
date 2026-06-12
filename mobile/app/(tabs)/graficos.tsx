import React, { useState, useEffect, useCallback } from 'react';
import {
  View, Text, ScrollView, StyleSheet, TouchableOpacity,
  ActivityIndicator, useWindowDimensions
} from 'react-native';
import type { Hive, HiveHistory } from '@/lib/types';
import { api } from '@/lib/api';
import { Colors } from '@/lib/colors';
import { LineChart } from '@/components/LineChart';
import { ErrorView } from '@/components/ErrorView';

type Metric = 'temperature' | 'weight' | 'co2';

const METRICS: { key: Metric; label: string; unit: string; color: string }[] = [
  { key: 'temperature', label: 'Temperatura', unit: '°C', color: Colors.danger },
  { key: 'weight', label: 'Peso', unit: 'kg', color: Colors.forest },
  { key: 'co2', label: 'CO₂', unit: 'ppm', color: Colors.honey },
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

  // Fix: se a métrica ativa for CO₂ e mudarmos para uma colmeia Starter,
  // volta automaticamente à temperatura em vez de ficar presa em "sem dados"
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
        {hives.map(h => (
          <TouchableOpacity
            key={h.id}
            style={[styles.selectorChip, selectedHive === h.id && styles.selectorChipActive]}
            onPress={() => setSelectedHive(h.id)}
          >
            <Text style={[styles.selectorText, selectedHive === h.id && styles.selectorTextActive]}>
              {h.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Metric selector */}
      <Text style={styles.sectionLabel}>Métrica</Text>
      <View style={styles.metricRow}>
        {METRICS.map(m => {
          const isPro = m.key === 'co2';
          const disabled = isPro && hive?.model === 'starter';
          return (
            <TouchableOpacity
              key={m.key}
              style={[
                styles.metricChip,
                metric === m.key && { backgroundColor: m.color, borderColor: m.color },
                disabled && styles.metricChipDisabled,
              ]}
              onPress={() => !disabled && setMetric(m.key)}
              disabled={disabled}
            >
              <Text style={[styles.metricText, metric === m.key && styles.metricTextActive]}>
                {m.label}
                {disabled ? ' (Pro)' : ''}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Chart */}
      <View style={styles.chartCard}>
        <Text style={styles.chartTitle}>
          {currentMetric.label} — últimos 7 dias ({currentMetric.unit})
        </Text>
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
            <CurrentValue icon="🌡" label="Temp. interior" value={`${hive.sensors.tempInterior.toFixed(1)}°C`} />
            <CurrentValue icon="⚖" label="Peso" value={`${hive.sensors.weight.toFixed(1)} kg`} />
            {hive.model === 'pro' && hive.sensors.co2 !== null && (
              <CurrentValue icon="💨" label="CO₂" value={`${hive.sensors.co2} ppm`} />
            )}
          </View>
        </View>
      )}
    </ScrollView>
  );
}

function CurrentValue({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <View style={styles.currentItem}>
      <Text style={styles.currentIcon}>{icon}</Text>
      <Text style={styles.currentValue}>{value}</Text>
      <Text style={styles.currentLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: { backgroundColor: Colors.light },
  content: { padding: 16, paddingBottom: 40 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.light, gap: 10 },
  emptyIcon: { fontSize: 44 },
  sectionLabel: { fontSize: 12, fontWeight: '700', color: Colors.mid, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8, marginTop: 16 },
  selectorRow: { marginBottom: 4 },
  selectorChip: {
    paddingHorizontal: 14, paddingVertical: 8, borderRadius: 20,
    backgroundColor: Colors.white, borderWidth: 1.5, borderColor: Colors.border,
    marginRight: 8,
  },
  selectorChipActive: { backgroundColor: Colors.dark, borderColor: Colors.dark },
  selectorText: { fontSize: 13, color: Colors.mid, fontWeight: '600' },
  selectorTextActive: { color: Colors.honey },
  metricRow: { flexDirection: 'row', gap: 8, marginBottom: 4 },
  metricChip: {
    flex: 1, paddingVertical: 8, borderRadius: 12,
    backgroundColor: Colors.white, borderWidth: 1.5, borderColor: Colors.border,
    alignItems: 'center',
  },
  metricChipDisabled: { opacity: 0.4 },
  metricText: { fontSize: 12, fontWeight: '600', color: Colors.mid },
  metricTextActive: { color: Colors.white },
  chartCard: {
    backgroundColor: Colors.white, borderRadius: 16, padding: 16,
    marginTop: 16, shadowColor: Colors.dark, shadowOpacity: 0.07,
    shadowRadius: 8, elevation: 3,
  },
  chartTitle: { fontSize: 13, fontWeight: '700', color: Colors.charcoal, marginBottom: 12 },
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
    flex: 1, backgroundColor: Colors.white, borderRadius: 14, padding: 14,
    alignItems: 'center', shadowColor: Colors.dark, shadowOpacity: 0.06,
    shadowRadius: 6, elevation: 2,
  },
  currentIcon: { fontSize: 22, marginBottom: 4 },
  currentValue: { fontSize: 18, fontWeight: '800', color: Colors.charcoal },
  currentLabel: { fontSize: 10, color: Colors.mid, marginTop: 2, textAlign: 'center' },
});
