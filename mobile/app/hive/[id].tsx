import React, { useState, useCallback, useEffect } from 'react';
import {
  View, Text, ScrollView, StyleSheet, ActivityIndicator,
  TouchableOpacity, useWindowDimensions, Alert, RefreshControl
} from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import type { Hive, HiveHistory } from '@/lib/types';
import { api } from '@/lib/api';
import { Colors, StatusColor } from '@/lib/colors';
import { StatusBadge } from '@/components/StatusBadge';
import { SensorRow } from '@/components/SensorRow';
import { LineChart } from '@/components/LineChart';
import { ErrorView } from '@/components/ErrorView';

export default function HiveDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const navigation = useNavigation();
  const [hive, setHive] = useState<Hive | null>(null);
  const [history, setHistory] = useState<HiveHistory | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(false);
  const { width } = useWindowDimensions();

  const load = useCallback(async () => {
    if (!id) return;
    setError(false);
    try {
      const [hiveData, histData] = await Promise.all([
        api.hives.get(id),
        api.hives.history(id),
      ]);
      setHive(hiveData);
      setHistory(histData);
      navigation.setOptions({ title: hiveData.name });
    } catch {
      setError(true);
    }
  }, [id, navigation]);

  useEffect(() => {
    load().finally(() => setLoading(false));
  }, [load]);

  const onRefresh = async () => {
    setRefreshing(true);
    await load();
    setRefreshing(false);
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.honey} />
      </View>
    );
  }

  if (error || !hive) {
    return (
      <ErrorView
        message="Não foi possível carregar esta colmeia."
        onRetry={() => {
          setLoading(true);
          load().finally(() => setLoading(false));
        }}
      />
    );
  }

  const s = hive.sensors;
  const isOffline = hive.status === 'offline';
  const statusColor = StatusColor[hive.status];

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.content}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={Colors.honey} />
      }
    >
      {/* Header card com faixa tonal do estado */}
      <View style={styles.headerCard}>
        <View style={[styles.headerTint, { backgroundColor: statusColor }]} />
        <View style={styles.headerInner}>
          <View style={styles.headerRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{hive.name}</Text>
              <Text style={styles.location}>📍 {hive.location.label}</Text>
            </View>
            <StatusBadge status={hive.status} />
          </View>
          <View style={styles.metaRow}>
            <MetaChip label={`Modelo ${hive.model.toUpperCase()}`} highlight={hive.model === 'pro'} />
            <MetaChip label={`Actualizado às ${formatTime(hive.lastUpdate)}`} />
          </View>
        </View>
      </View>

      {/* Offline notice */}
      {isOffline && (
        <View style={styles.offlineBanner}>
          <Text style={styles.offlineText}>
            📡 Esta colmeia está offline. Os dados apresentados podem estar desatualizados.
          </Text>
        </View>
      )}

      {/* Wasp alert banner */}
      {s.waspDetected && (
        <View style={styles.waspBanner}>
          <Text style={styles.waspText}>🚨 Vespa asiática detetada! Arpas ativadas.</Text>
        </View>
      )}

      {/* Sensors */}
      {!isOffline && (
        <View style={styles.card}>
          <View style={styles.cardTitleRow}>
            <Text style={styles.cardTitle}>Sensores</Text>
            <View style={styles.liveTag}>
              <View style={styles.liveDot} />
              <Text style={styles.liveText}>EM TEMPO REAL</Text>
            </View>
          </View>
          <SensorRow icon="🌡" label="Temperatura interior" value={`${s.tempInterior.toFixed(1)}°C`} alert={s.tempInterior > 37} />
          <SensorRow icon="🌤" label="Temperatura exterior" value={`${s.tempExterior.toFixed(1)}°C`} />
          <SensorRow icon="💧" label="Humidade relativa" value={`${s.humidity}%`} />
          <SensorRow icon="⚖" label="Peso da colmeia" value={`${s.weight.toFixed(1)} kg`} />
          {s.co2 !== null && (
            <SensorRow icon="💨" label="CO₂ interior" value={`${s.co2} ppm`} alert={s.co2 > 3500} />
          )}
          <SensorRow icon="🔋" label="Bateria" value={`${s.battery}%`} alert={s.battery < 20} />
          <SensorRow icon="📡" label="Sinal 4G" value={`${s.signal}%`} alert={s.signal < 30} />
        </View>
      )}

      {/* Charts */}
      {history && (
        <>
          <ChartSection
            title="Temperatura"
            subtitle="Últimos 7 dias · °C"
            data={history.temperature}
            color={Colors.danger}
            width={width - 64}
          />
          <ChartSection
            title="Peso"
            subtitle="Últimos 7 dias · kg"
            data={history.weight}
            color={Colors.forest}
            width={width - 64}
          />
          {history.co2.length > 0 && (
            <ChartSection
              title="CO₂"
              subtitle="Últimos 7 dias · ppm"
              data={history.co2}
              color={Colors.honey}
              width={width - 64}
            />
          )}
        </>
      )}

      {/* Actions */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Acções</Text>
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.actionBtn}
          onPress={() => Alert.alert('Intervenção registada', 'Visita anotada com sucesso.')}
        >
          <Text style={styles.actionText}>📝 Registar visita</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.85}
          style={[styles.actionBtn, styles.actionBtnSecondary]}
          onPress={() => Alert.alert('Relatório', 'O relatório PDF está a ser gerado.')}
        >
          <Text style={styles.actionTextSecondary}>📄 Exportar relatório PDF</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function MetaChip({ label, highlight = false }: { label: string; highlight?: boolean }) {
  return (
    <View style={[styles.metaChip, highlight && styles.metaChipPro]}>
      <Text style={[styles.metaChipText, highlight && styles.metaChipTextPro]}>{label}</Text>
    </View>
  );
}

function ChartSection({ title, subtitle, data, color, width }: {
  title: string; subtitle: string; data: { label: string; value: number }[]; color: string; width: number
}) {
  return (
    <View style={styles.card}>
      <View style={styles.chartHeader}>
        <View style={[styles.chartAccent, { backgroundColor: color }]} />
        <View>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.chartSubtitle}>{subtitle}</Text>
        </View>
      </View>
      <LineChart data={data} color={color} width={width} height={160} />
    </View>
  );
}

function formatTime(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleTimeString('pt-PT', { hour: '2-digit', minute: '2-digit' });
}

const styles = StyleSheet.create({
  scroll: { backgroundColor: Colors.light },
  content: { padding: 16, paddingBottom: 40, gap: 14 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.light },

  headerCard: {
    backgroundColor: Colors.white, borderRadius: 20, overflow: 'hidden',
    shadowColor: Colors.dark, shadowOpacity: 0.1, shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 }, elevation: 4,
  },
  headerTint: { height: 6 },
  headerInner: { padding: 18 },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
  name: { fontSize: 22, fontWeight: '800', color: Colors.charcoal },
  location: { fontSize: 13, color: Colors.mid, marginTop: 4 },
  metaRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  metaChip: { backgroundColor: Colors.light, paddingHorizontal: 11, paddingVertical: 5, borderRadius: 999 },
  metaChipText: { fontSize: 11, color: Colors.mid, fontWeight: '600' },
  metaChipPro: { backgroundColor: Colors.honeyLight },
  metaChipTextPro: { color: Colors.honeyDark, fontWeight: '800' },

  offlineBanner: {
    backgroundColor: '#EEF0F2', borderRadius: 14, padding: 14,
    borderLeftWidth: 4, borderLeftColor: Colors.mid,
  },
  offlineText: { fontSize: 13, fontWeight: '600', color: Colors.mid },
  waspBanner: {
    backgroundColor: '#FDECEA', borderRadius: 14, padding: 14,
    borderLeftWidth: 4, borderLeftColor: Colors.danger,
  },
  waspText: { fontSize: 14, fontWeight: '700', color: Colors.danger },

  card: {
    backgroundColor: Colors.white, borderRadius: 20, padding: 18,
    shadowColor: Colors.dark, shadowOpacity: 0.07, shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 }, elevation: 3,
    gap: 10,
  },
  cardTitleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  cardTitle: { fontSize: 15, fontWeight: '800', color: Colors.charcoal },
  liveTag: {
    flexDirection: 'row', alignItems: 'center', gap: 5,
    backgroundColor: '#E8F5EC', paddingHorizontal: 9, paddingVertical: 4, borderRadius: 999,
  },
  liveDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: StatusColor.healthy },
  liveText: { fontSize: 9, fontWeight: '800', color: StatusColor.healthy, letterSpacing: 0.6 },

  chartHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 4 },
  chartAccent: { width: 4, height: 30, borderRadius: 2 },
  chartSubtitle: { fontSize: 11, color: Colors.mid, marginTop: 1 },

  actionBtn: {
    backgroundColor: Colors.honey, borderRadius: 14, padding: 15, alignItems: 'center',
    shadowColor: Colors.honey, shadowOpacity: 0.35, shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 }, elevation: 3,
  },
  actionBtnSecondary: {
    backgroundColor: Colors.white, borderWidth: 2, borderColor: Colors.honey,
    shadowOpacity: 0, elevation: 0,
  },
  actionText: { color: Colors.dark, fontWeight: '800', fontSize: 15 },
  actionTextSecondary: { color: Colors.honeyDark, fontWeight: '800', fontSize: 15 },
});
