import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';

export default function About() {
  return (
    <>
      <StatusBar/>
      <View>        
        <Text>About Screen</Text>
      </View>
    </>
  );
}