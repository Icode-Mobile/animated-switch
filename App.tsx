import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Toggle } from './src/components/Toggle';

export default function App() {
  return (
    <View style={styles.container}>
      <Toggle />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
