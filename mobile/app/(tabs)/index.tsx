import React, { useState, useCallback } from 'react';
import {
  View, Text, FlatList, StyleSheet, RefreshControl, ActivityIndicator
} from 'react-native';
import { useFocusEffect } from 'expo-router';
import type { Hive } from '@/lib/types';
import { api } from '@/lib/api';
import { Colors, StatusColor } from '@/lib/colors';
import { HiveCard } from '@/components/HiveCard';
import { ErrorView } from '@/components/ErrorView';

// Saudação dinâmica consoante a hora do dia
function greeting(): string {
  const h = new Date().getHours();
  if (h >= 6 && h < 13) return 'Bom dia';
  if (h >= 13 && h < 20) return 'Boa tarde';
  return 'Boa noite';
}

export default function DashboardScreen() {
  const [hives, setHives] = useState<Hive[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(false);

  const load = useCallback(async (silent = false) => {
    if (!silent) setLoading(true);
    setError(false);
    try {
      const data = await api.hives.list();
      setHives(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useFocusEffect(useCallback(() => { load(true); }, [load]));

  const onRefresh = () => { setRefreshing(true); load(true); };

  const counts = {
    total: hives.length,
    healthy: hives.filter(h => h.status === 'healthy').length,
    warning: hives.filter(h => h.status === 'warning').length,
    danger: hives.filter(h => h.status === 'danger').length,
    offline: hives.filter(h => h.status === 'offline').length,
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.honey} />
      </View>
    );
  }

  // Erro só ocupa o ecrã se não houver dados anteriores para mostrar
  if (error && hives.length === 0) {
    return <ErrorView onRetry={() => load()} />;
  }

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={hives}
      keyExtractor={h => h.id}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} tintColor={Colors.honey} />}
      ListHeaderComponent={
        <View>
          <View style={styles.header}>
            <Text style={styles.greeting}>{greeting()}, Apicultor 🐝</Text>
            <Text style={styles.subtitle}>Aqui está o estado do teu apiário</Text>
          </View>
          {error && (
            <View style={styles.staleBanner}>
              <Text style={styles.staleText}>
                ⚠️ Sem ligação — a mostrar os últimos dados conhecidos
              </Text>
            </View>
          )}
          <View style={styles.statsRow}>
            <StatCard label="Total" value={counts.total} color={Colors.charcoal} />
            <StatCard label="Saudáveis" value={counts.healthy} color={StatusColor.healthy} />
            <StatCard label="Atenção" value={counts.warning} color={StatusColor.warning} />
            <StatCard label="Perigo" value={counts.danger} color={StatusColor.danger} />
            {counts.offline > 0 && (
              <StatCard label="Offline" value={counts.offline} color={StatusColor.offline} />
            )}
          </View>
          <Text style={styles.sectionTitle}>Colmeias</Text>
        </View>
      }
      renderItem={({ item }) => <HiveCard hive={item} />}
      ListEmptyComponent={
        <Text style={styles.empty}>Nenhuma colmeia encontrada.</Text>
      }
    />
  );
}

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <View style={styles.stat}>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  list: { backgroundColor: Colors.light },
  content: { padding: 16, paddingBottom: 32 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.light },
  header: { marginBottom: 16 },
  greeting: { fontSize: 22, fontWeight: '800', color: Colors.charcoal },
  subtitle: { fontSize: 14, color: Colors.mid, marginTop: 2 },
  staleBanner: {
    backgroundColor: '#FFF6E5', borderRadius: 10, padding: 10,
    marginBottom: 12, borderLeftWidth: 3, borderLeftColor: Colors.honey,
  },
  staleText: { fontSize: 12, color: Colors.charcoal, fontWeight: '600' },
  statsRow: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 20,
  },
  stat: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 14,
    padding: 12,
    alignItems: 'center',
    shadowColor: Colors.dark,
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  statValue: { fontSize: 24, fontWeight: '800' },
  statLabel: { fontSize: 10, color: Colors.mid, marginTop: 2, fontWeight: '600' },
  sectionTitle: { fontSize: 16, fontWeight: '700', color: Colors.charcoal, marginBottom: 10 },
  empty: { textAlign: 'center', color: Colors.mid, marginTop: 40 },
});
