import { Tabs } from 'expo-router';
import { LayoutAnimation, PanResponder, Platform, Pressable, StyleSheet, Text, UIManager, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAlerts } from '@/lib/AlertsContext';
import { Colors } from '@/lib/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useCallback, useEffect, useRef, useState } from 'react';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const TAB_HEIGHT = 60;
const AUTO_HIDE_DELAY = 4000;
const IS_ANDROID = Platform.OS === 'android';

const ICONS = {
  index: 'grid',
  map: 'map',
  graficos: 'bar-chart',
  alertas: 'notifications',
} as const;

const LABELS: Record<string, string> = {
  index: 'Dashboard',
  map: 'Mapa',
  graficos: 'Gráficos',
  alertas: 'Alertas',
};

// Transparent overlay rendered as a direct child of TabLayout (not inside the
// custom tabBar), so Android parent-bounds clipping never applies.
function SwipeUpTrigger({ onSwipeUp }: { onSwipeUp: () => void }) {
  const insets = useSafeAreaInsets();
  const cbRef = useRef(onSwipeUp);
  useEffect(() => { cbRef.current = onSwipeUp; }, [onSwipeUp]);

  const pan = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (_, gs) => {
        if (gs.dy < -15 || gs.vy < -0.2) cbRef.current();
      },
    })
  ).current;

  return (
    <View
      style={[styles.swipeTrigger, { bottom: insets.bottom, height: TAB_HEIGHT }]}
      {...pan.panHandlers}
    />
  );
}

interface TabBarProps extends BottomTabBarProps {
  visible: boolean;
  onTabPress: () => void;
}

function CustomTabBar({ state, navigation, visible, onTabPress }: TabBarProps) {
  const insets = useSafeAreaInsets();
  const { unreadCount } = useAlerts();
  const bottomPad = insets.bottom;
  const totalHeight = TAB_HEIGHT + bottomPad;

  return (
    <View
      style={[
        styles.tabBar,
        { paddingBottom: bottomPad },
        IS_ANDROID && { height: visible ? totalHeight : 0, overflow: 'hidden' },
        !IS_ANDROID && { height: totalHeight },
      ]}
    >
      {state.routes.map((route, index) => {
        const focused = state.index === index;
        const icon = ICONS[route.name as keyof typeof ICONS];
        const badge = route.name === 'alertas' && unreadCount > 0 ? unreadCount : 0;
        return (
          <Pressable
            key={route.key}
            style={styles.tab}
            onPress={() => {
              onTabPress();
              const event = navigation.emit({ type: 'tabPress', target: route.key, canPreventDefault: true });
              if (!focused && !event.defaultPrevented) navigation.navigate(route.name);
            }}
          >
            <View>
              <Ionicons name={icon as any} size={24} color={focused ? Colors.honey : Colors.mid} />
              {badge > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{badge}</Text>
                </View>
              )}
            </View>
            <Text style={[styles.tabLabel, { color: focused ? Colors.honey : Colors.mid }]}>
              {LABELS[route.name]}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default function TabLayout() {
  const [barVisible, setBarVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = useCallback(() => {
    if (!IS_ANDROID) return;
    if (timerRef.current) clearTimeout(timerRef.current);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setBarVisible(true);
    timerRef.current = setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setBarVisible(false);
    }, AUTO_HIDE_DELAY);
  }, []);

  // Android: start auto-hide timer on mount
  useEffect(() => {
    if (!IS_ANDROID) return;
    timerRef.current = setTimeout(() => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setBarVisible(false);
    }, AUTO_HIDE_DELAY);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Tabs
        tabBar={(props) => <CustomTabBar {...props} visible={barVisible} onTabPress={show} />}
        screenOptions={{
          headerStyle: { backgroundColor: Colors.dark },
          headerTitleStyle: { color: Colors.white, fontWeight: '700', fontSize: 18 },
          headerTintColor: Colors.honey,
        }}
      >
        <Tabs.Screen name="index" options={{ title: 'Dashboard' }} />
        <Tabs.Screen name="map" options={{ title: 'Mapa' }} />
        <Tabs.Screen name="graficos" options={{ title: 'Gráficos' }} />
        <Tabs.Screen name="alertas" options={{ title: 'Alertas' }} />
      </Tabs>

      {/* Swipe trigger lives here — direct child of this View, not inside the
          custom tabBar, so Android never clips its touch area */}
      {IS_ANDROID && !barVisible && <SwipeUpTrigger onSwipeUp={show} />}
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: Colors.white,
    borderTopColor: Colors.border,
    borderTopWidth: 1,
    flexDirection: 'row',
    paddingTop: 4,
    elevation: 8,
  },
  tab: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 4 },
  tabLabel: { fontSize: 11, fontWeight: '600', marginTop: 2 },
  badge: {
    position: 'absolute',
    top: -4,
    right: -8,
    backgroundColor: Colors.danger,
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  badgeText: { color: Colors.white, fontSize: 10, fontWeight: '700' },
  swipeTrigger: {
    position: 'absolute',
    left: 0,
    right: 0,
  },
});
