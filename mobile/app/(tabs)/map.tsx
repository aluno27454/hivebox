import React, { useState, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Pressable } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { useRouter, useFocusEffect } from 'expo-router';
import type { Hive } from '@/lib/types';
import { api } from '@/lib/api';
import { Colors, StatusColor } from '@/lib/colors';
import { StatusBadge } from '@/components/StatusBadge';
import { ErrorView } from '@/components/ErrorView';

export default function MapScreen() {
  const [hives, setHives] = useState<Hive[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const firstLoad = useRef(true);
  const router = useRouter();

  const load = useCallback(() => {
    setError(false);
    // Só mostra o spinner na primeira carga; nos refocus seguintes
    // atualiza silenciosamente em vez de "piscar" o mapa
    if (firstLoad.current) setLoading(true);
    api.hives.list()
      .then(data => { setHives(data); firstLoad.current = false; })
      .catch(() => { if (firstLoad.current) setError(true); })
      .finally(() => setLoading(false));
  }, []);

  useFocusEffect(useCallback(() => { load(); }, [load]));

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.honey} />
      </View>
    );
  }

  if (error) {
    return <ErrorView onRetry={load} />;
  }

  // Center map on centroid of all hives
  const avgLat = hives.reduce((s, h) => s + h.location.latitude, 0) / (hives.length || 1);
  const avgLng = hives.reduce((s, h) => s + h.location.longitude, 0) / (hives.length || 1);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: avgLat || 39.5900,
          longitude: avgLng || -8.4100,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        }}
      >
        {hives.map(hive => (
          <Marker
            key={hive.id}
            coordinate={{ latitude: hive.location.latitude, longitude: hive.location.longitude }}
            // tracksViewChanges={false}: sem isto, markers com children custom
            // re-renderizam a cada frame no Android — grande ganho de performance
            tracksViewChanges={false}
          >
            <View style={[styles.markerPin, { backgroundColor: StatusColor[hive.status] }]}>
              <Text style={styles.markerEmoji}>🍯</Text>
            </View>
            <Callout onPress={() => router.push(`/hive/${hive.id}`)}>
              <View style={styles.callout}>
                <Text style={styles.calloutName}>{hive.name}</Text>
                <StatusBadge status={hive.status} size="sm" />
                {hive.status !== 'offline' && (
                  <>
                    <Text style={styles.calloutSensor}>
                      🌡 {hive.sensors.tempInterior.toFixed(1)}°C  ·  ⚖ {hive.sensors.weight.toFixed(1)} kg
                    </Text>
                    <Text style={styles.calloutSensor}>
                      🔋 {hive.sensors.battery}%  ·  📡 {hive.sensors.signal}%
                    </Text>
                  </>
                )}
                <Pressable style={styles.calloutBtn}>
                  <Text style={styles.calloutBtnText}>Ver detalhes →</Text>
                </Pressable>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      {/* Legend */}
      <View style={styles.legend}>
        {(['healthy', 'warning', 'danger', 'offline'] as const).map(s => (
          <View key={s} style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: StatusColor[s] }]} />
            <Text style={styles.legendText}>
              {{ healthy: 'Saudável', warning: 'Atenção', danger: 'Perigo', offline: 'Offline' }[s]}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.light },
  markerPin: {
    width: 36, height: 36, borderRadius: 18,
    justifyContent: 'center', alignItems: 'center',
    borderWidth: 2, borderColor: Colors.white,
    shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 4, elevation: 4,
  },
  markerEmoji: { fontSize: 16 },
  callout: { width: 200, padding: 10, gap: 6 },
  calloutName: { fontSize: 14, fontWeight: '700', color: Colors.charcoal },
  calloutSensor: { fontSize: 12, color: Colors.mid },
  calloutBtn: {
    marginTop: 4, backgroundColor: Colors.honey,
    borderRadius: 8, paddingVertical: 5, paddingHorizontal: 10,
  },
  calloutBtnText: { color: Colors.dark, fontWeight: '700', fontSize: 12, textAlign: 'center' },
  legend: {
    position: 'absolute', bottom: 24, left: 16,
    backgroundColor: Colors.white, borderRadius: 12, padding: 10, gap: 6,
    shadowColor: Colors.dark, shadowOpacity: 0.12, shadowRadius: 8, elevation: 4,
  },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendDot: { width: 10, height: 10, borderRadius: 5 },
  legendText: { fontSize: 12, color: Colors.charcoal },
});
