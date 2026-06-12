import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@/lib/colors';

// Componente reutilizável de erro com retry — colocar em components/ErrorView.tsx
export function ErrorView({
  message = 'Não foi possível carregar os dados. Verifica a tua ligação.',
  onRetry,
}: {
  message?: string;
  onRetry: () => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📡</Text>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity style={styles.btn} onPress={onRetry}>
        <Text style={styles.btnText}>Tentar novamente</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    backgroundColor: Colors.light, padding: 32, gap: 12,
  },
  icon: { fontSize: 44 },
  message: { fontSize: 14, color: Colors.mid, textAlign: 'center', lineHeight: 20 },
  btn: {
    backgroundColor: Colors.honey, borderRadius: 12,
    paddingVertical: 12, paddingHorizontal: 24, marginTop: 4,
  },
  btnText: { color: Colors.dark, fontWeight: '700', fontSize: 14 },
});
