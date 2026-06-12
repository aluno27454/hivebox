import React, { useCallback } from 'react';
import {
  View, Text, FlatList, StyleSheet, TouchableOpacity,
  RefreshControl, ActivityIndicator
} from 'react-native';
import { useFocusEffect } from 'expo-router';
import { useAlerts } from '@/lib/AlertsContext';
import { AlertItem } from '@/components/AlertItem';
import { Colors } from '@/lib/colors';

export default function AlertasScreen() {
  const { alerts, unreadCount, loading, refresh, markRead, markAllRead } = useAlerts();

  useFocusEffect(useCallback(() => { refresh(); }, [refresh]));

  const sorted = [...alerts].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  if (loading && alerts.length === 0) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.honey} />
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      contentContainerStyle={styles.content}
      data={sorted}
      keyExtractor={a => a.id}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={refresh} tintColor={Colors.honey} />}
      ListHeaderComponent={
        <View style={styles.header}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>Alertas</Text>
            {unreadCount > 0 && (
              <View style={styles.unreadPill}>
                <Text style={styles.unreadPillText}>{unreadCount}</Text>
              </View>
            )}
          </View>
          {unreadCount > 0 && (
            <TouchableOpacity style={styles.markAllBtn} onPress={markAllRead} activeOpacity={0.8}>
              <Text style={styles.markAllText}>✓ Marcar todos lidos</Text>
            </TouchableOpacity>
          )}
        </View>
      }
      renderItem={({ item }) => (
        <AlertItem
          alert={item}
          onPress={() => { if (!item.read) markRead(item.id); }}
        />
      )}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <View style={styles.emptyCircle}>
            <Text style={styles.emptyIcon}>🎉</Text>
          </View>
          <Text style={styles.emptyTitle}>Tudo em ordem!</Text>
          <Text style={styles.emptyText}>Nenhum alerta. As tuas abelhas estão bem.</Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  list: { backgroundColor: Colors.light },
  content: { padding: 16, paddingBottom: 32 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.light },
  header: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'center', marginBottom: 16,
  },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  title: { fontSize: 24, fontWeight: '800', color: Colors.charcoal },
  unreadPill: {
    backgroundColor: Colors.danger, borderRadius: 999,
    minWidth: 24, height: 24, paddingHorizontal: 7,
    justifyContent: 'center', alignItems: 'center',
  },
  unreadPillText: { color: Colors.white, fontSize: 12, fontWeight: '800' },
  markAllBtn: {
    backgroundColor: Colors.honeyLight, paddingHorizontal: 13,
    paddingVertical: 8, borderRadius: 999,
  },
  markAllText: { fontSize: 12, color: Colors.honeyDark, fontWeight: '800' },
  emptyContainer: { alignItems: 'center', marginTop: 56, gap: 8 },
  emptyCircle: {
    width: 88, height: 88, borderRadius: 44,
    backgroundColor: Colors.honeyLight,
    justifyContent: 'center', alignItems: 'center', marginBottom: 6,
  },
  emptyIcon: { fontSize: 40 },
  emptyTitle: { fontSize: 17, fontWeight: '800', color: Colors.charcoal },
  emptyText: { fontSize: 14, color: Colors.mid, textAlign: 'center' },
});
