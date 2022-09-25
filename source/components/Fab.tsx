import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

interface FabProps {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({title, position, onPress}: FabProps) => {
  return (
    <TouchableOpacity
      style={
        position === 'bl'
          ? styles.buttonContainerLeft
          : styles.buttonContainerRight
      }
      onPress={onPress}>
      <View style={styles.fab}>
        <Text style={styles.fabText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainerLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    margin: 20,
  },
  buttonContainerRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 20,
  },
  fab: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  fabText: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
