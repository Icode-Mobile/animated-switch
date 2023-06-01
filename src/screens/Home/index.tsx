import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { Toggle } from '../../components/Toggle';

import { useMode } from '../../context';

export default function Home() {
  const { type } = useMode();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: type === 'sun' ? 'white' : 'black' },
      ]}
    >
      <Toggle />
      <Text style={styles.text}>Modo {type === 'sun' ? 'Light' : 'Dark'}</Text>
      <StatusBar style='light' backgroundColor='#111' translucent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 13,
    color: 'gray',
  },
});
