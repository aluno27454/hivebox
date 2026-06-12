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

function greeting(): string {
  const h = new Date().getHours();
  if (h >= 6 && h < 13) return 'Bom dia';
  if (h >= 13 && h < 20) return 'Boa tarde';
  return 'Boa noite';
}

function todayLabel(): string {
  const d = new Date().toLocaleDateString('pt-PT', {
    weekday: 'long', day: 'numeric', month: 'long',
  });
  return d.charAt(0).toUpperCase() + d.slice(1);
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

  // Frase de estado geral do apiário no hero
  const heroStatus =
    counts.danger > 0 ? { text: `${counts.danger} colmeia${counts.danger > 1 ? 's' : ''} em perigo`, color: StatusColor.danger }
    : counts.warning > 0 ? { text: `${counts.warning} colmeia${counts.warning > 1 ? 's' : ''} a precisar de atenção`, color: StatusColor.warning }
    : { text: 'Tudo tranquilo no apiário', color: StatusColor.healthy };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.honey} />
      </View>
    );
  }

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
          {/* Hero escuro com acento mel */}
          <View style={styles.hero}>
            <Text style={styles.heroBee}>🐝</Text>
            <Text style={styles.heroDate}>{todayLabel()}</Text>
            <Text style={styles.heroGreeting}>{greeting()}, Apicultor</Text>
            <View style={styles.heroStatusRow}>
              <View style={[styles.heroStatusDot, { backgroundColor: heroStatus.color }]} />
              <Text style={styles.heroStatusText}>{heroStatus.text}</Text>
            </View>
          </View>

          {error && (
            <View style={styles.staleBanner}>
              <Text style={styles.staleText}>
                ⚠️ Sem ligação — a mostrar os últimos dados conhecidos
              </Text>
            </View>
          )}

          {/* Estatísticas sobrepostas ao hero */}
          <View style={styles.statsRow}>
            <StatCard label="Total" value={counts.total} color={Colors.charcoal} />
            <StatCard label="Saudáveis" value={counts.healthy} color={StatusColor.healthy} />
            <StatCard label="Atenção" value={counts.warning} color={StatusColor.warning} />
            <StatCard label="Perigo" value={counts.danger} color={StatusColor.danger} />
            {counts.offline > 0 && (
              <StatCard label="Offline" value={counts.offline} color={StatusColor.offline} />
            )}
          </View>

          <View style={styles.sectionRow}>
            <Text style={styles.sectionTitle}>As tuas colmeias</Text>
            <Text style={styles.sectionCount}>{counts.total}</Text>
          </View>
        </View>
      }
      renderItem={({ item }) => <HiveCard hive={item} />}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyIcon}>🍯</Text>
          <Text style={styles.empty}>Nenhuma colmeia encontrada.</Text>
          <Text style={styles.emptyHint}>Liga a tua primeira Hive Box para começares.</Text>
        </View>
      }
    />
  );
}

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
  return (
    <View style={[styles.stat, { borderTopColor: color }]}>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  list: { backgroundColor: Colors.light },
  content: { paddingBottom: 32 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.light },

  hero: {
    backgroundColor: Colors.dark,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 44,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    overflow: 'hidden',
  },
  heroBee: {
    position: 'absolute',
    right: -8,
    top: 4,
    fontSize: 96,
    opacity: 0.12,
    transform: [{ rotate: '-15deg' }],
  },
  heroDate: {
    color: Colors.honey,
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    marginBottom: 4,
  },
  heroGreeting: { color: Colors.white, fontSize: 26, fontWeight: '800' },
  heroStatusRow: { flexDirection: 'row', alignItems: 'center', gap: 7, marginTop: 8 },
  heroStatusDot: { width: 8, height: 8, borderRadius: 4 },
  heroStatusText: { color: 'rgba(255,255,255,0.75)', fontSize: 13, fontWeight: '600' },

  staleBanner: {
    backgroundColor: '#FFF6E5', borderRadius: 12, padding: 10,
    marginHorizontal: 16, marginTop: 12,
    borderLeftWidth: 3, borderLeftColor: Colors.honey,
  },
  staleText: { fontSize: 12, color: Colors.charcoal, fontWeight: '600' },

  statsRow: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    marginTop: -26, // sobrepõe o hero
    marginBottom: 24,
  },
  stat: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 16,
    borderTopWidth: 3,
    paddingVertical: 14,
    paddingHorizontal: 6,
    alignItems: 'center',
    shadowColor: Colors.dark,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  statValue: { fontSize: 24, fontWeight: '800' },
  statLabel: { fontSize: 10, color: Colors.mid, marginTop: 3, fontWeight: '700', textTransform: 'uppercase', letterSpacing: 0.4 },

  sectionRow: {
    flexDirection: 'row', alignItems: 'center', gap: 8,
    paddingHorizontal: 16, marginBottom: 12,
  },
  sectionTitle: { fontSize: 17, fontWeight: '800', color: Colors.charcoal },
  sectionCount: {
    backgroundColor: Colors.honey, color: Colors.dark,
    fontSize: 12, fontWeight: '800',
    paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10,
    overflow: 'hidden',
  },

  emptyContainer: { alignItems: 'center', marginTop: 40, paddingHorizontal: 32, gap: 6 },
  emptyIcon: { fontSize: 44, marginBottom: 4 },
  empty: { textAlign: 'center', color: Colors.charcoal, fontSize: 15, fontWeight: '700' },
  emptyHint: { textAlign: 'center', color: Colors.mid, fontSize: 13 },
});
