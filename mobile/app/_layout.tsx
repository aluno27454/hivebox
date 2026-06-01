import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { AlertsProvider } from '@/lib/AlertsContext';
import { registerForPushNotifications } from '@/services/notifications';
import { Colors } from '@/lib/colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  useEffect(() => {
    registerForPushNotifications();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <AlertsProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="hive/[id]"
          options={{
            title: 'Colmeia',
            headerBackTitle: 'Voltar',
            headerStyle: { backgroundColor: Colors.dark },
            headerTitleStyle: { color: Colors.white, fontWeight: '700' },
            headerTintColor: Colors.honey,
          }}
        />
      </Stack>
    </AlertsProvider>
    </GestureHandlerRootView>
  );
}
