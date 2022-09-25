import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Fab } from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  return (
    <View
      style={styles.container}>
      <Text
        style={styles.title}>
        Contador: {counter}
      </Text>
      <Fab
        title="+1"
        onPress={() => setCounter(counter + 1)}
        position="bl"
      />
      <Fab
        title="-1"
        onPress={() => setCounter(counter - 1)}
        position="br"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});
