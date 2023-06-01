import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Toggle } from './src/components/Toggle';
import { ModeContextProvider } from './src/context';
import Home from './src/screens/Home';

export default function App() {
  return (
    <ModeContextProvider>
      <Home />
    </ModeContextProvider>
  );
}
