import React from 'react';
import {View, Text} from 'react-native';

export const FirstScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 45,
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center',
        }}>
        Hola Mundo
      </Text>
    </View>
  );
};
