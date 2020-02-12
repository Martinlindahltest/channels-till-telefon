import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Netinfo from './components/Netinfo';

export default function App() {
  return (
    <View >
      <Netinfo />

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
