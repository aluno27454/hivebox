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

  // Antes: erro deixava o spinner infinito. Agora mostra erro com retry.
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
      {/* Header card */}
      <View style={[styles.headerCard, { borderTopColor: statusColor }]}>
        <View style={styles.headerRow}>
          <View>
            <Text style={styles.name}>{hive.name}</Text>
            <Text style={styles.location}>📍 {hive.location.label}</Text>
          </View>
          <StatusBadge status={hive.status} />
        </View>
        <View style={styles.metaRow}>
          <MetaChip label={`Modelo: ${hive.model.toUpperCase()}`} />
          <MetaChip label={`Última actualização: ${formatTime(hive.lastUpdate)}`} />
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
          <Text style={styles.cardTitle}>Sensores em tempo real</Text>
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
            title="Temperatura — últimos 7 dias (°C)"
            data={history.temperature}
            color={Colors.danger}
            width={width - 64}
          />
          <ChartSection
            title="Peso — últimos 7 dias (kg)"
            data={history.weight}
            color={Colors.forest}
            width={width - 64}
          />
          {history.co2.length > 0 && (
            <ChartSection
              title="CO₂ — últimos 7 dias (ppm)"
              data={history.co2}
              color={Colors.honey}
              width={width - 64}
            />
          )}
        </>
      )}

      {/* Actions */}
      <View style={styles.actionsSection}>
        <Text style={styles.cardTitle}>Acções</Text>
        <TouchableOpacity
          style={styles.actionBtn}
          onPress={() => Alert.alert('Intervenção registada', 'Visita anotada com sucesso.')}
        >
          <Text style={styles.actionText}>📝 Registar visita</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionBtn, styles.actionBtnSecondary]}
          onPress={() => Alert.alert('Relatório', 'O relatório PDF está a ser gerado.')}
        >
          <Text style={styles.actionTextSecondary}>📄 Exportar relatório PDF</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function MetaChip({ label }: { label: string }) {
  return (
    <View style={styles.metaChip}>
      <Text style={styles.metaChipText}>{label}</Text>
    </View>
  );
}

function ChartSection({ title, data, color, width }: {
  title: string; data: { label: string; value: number }[]; color: string; width: number
}) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
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
  content: { padding: 16, paddingBottom: 40, gap: 12 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.light },
  headerCard: {
    backgroundColor: Colors.white, borderRadius: 16, padding: 16,
    borderTopWidth: 4, shadowColor: Colors.dark, shadowOpacity: 0.08,
    shadowRadius: 8, elevation: 3,
  },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10 },
  name: { fontSize: 20, fontWeight: '800', color: Colors.charcoal, flex: 1 },
  location: { fontSize: 12, color: Colors.mid, marginTop: 3 },
  metaRow: { flexDirection: 'row', gap: 8, flexWrap: 'wrap' },
  metaChip: { backgroundColor: Colors.light, paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  metaChipText: { fontSize: 11, color: Colors.mid },
  offlineBanner: {
    backgroundColor: '#EEF0F2', borderRadius: 12, padding: 14,
    borderLeftWidth: 4, borderLeftColor: Colors.mid,
  },
  offlineText: { fontSize: 13, fontWeight: '600', color: Colors.mid },
  waspBanner: {
    backgroundColor: '#FDECEA', borderRadius: 12, padding: 14,
    borderLeftWidth: 4, borderLeftColor: Colors.danger,
  },
  waspText: { fontSize: 14, fontWeight: '700', color: Colors.danger },
  card: {
    backgroundColor: Colors.white, borderRadius: 16, padding: 16,
    shadowColor: Colors.dark, shadowOpacity: 0.07, shadowRadius: 8, elevation: 2,
  },
  cardTitle: { fontSize: 14, fontWeight: '700', color: Colors.charcoal, marginBottom: 10 },
  actionsSection: {
    backgroundColor: Colors.white, borderRadius: 16, padding: 16,
    shadowColor: Colors.dark, shadowOpacity: 0.07, shadowRadius: 8, elevation: 2,
    gap: 10,
  },
  actionBtn: {
    backgroundColor: Colors.honey, borderRadius: 12, padding: 14, alignItems: 'center',
  },
  actionBtnSecondary: { backgroundColor: Colors.white, borderWidth: 2, borderColor: Colors.honey },
  actionText: { color: Colors.dark, fontWeight: '700', fontSize: 15 },
  actionTextSecondary: { color: Colors.honey, fontWeight: '700', fontSize: 15 },
});
