import { Image } from 'expo-image';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

// The starter's only screen: it proves the app, the asset pack and the font all load.
export default function Welcome() {
  const c = useColorScheme() === 'dark' ? dark : light;

  return (
    <View style={[styles.screen, { backgroundColor: c.bg }]}>
      <Image source={require('@/assets/images/icon.png')} style={styles.icon} />
      <Text style={[styles.title, { color: c.text }]}>
        Welcome to{'\n'}
        <Text style={{ color: c.accent }}>Ember Restaurant</Text>
      </Text>
    </View>
  );
}

const light = { bg: '#F7F3EE', text: '#1F1B16', accent: '#E2531A' };
const dark = { bg: '#141210', text: '#F5EFE8', accent: '#FF6B2C' };

const styles = StyleSheet.create({
  screen: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
  icon: { width: 112, height: 112, borderRadius: 28, marginBottom: 32 },
  title: { fontFamily: 'Bricolage-800-40', fontSize: 38, lineHeight: 44, letterSpacing: -0.8, textAlign: 'center' },
});
