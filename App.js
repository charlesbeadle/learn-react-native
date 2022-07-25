import React from 'react';
import { StatusBar, StyleSheet, View, Text } from 'react-native';

export default function App() {
  const { container, box, boxText } = styles;
  return (
    <>
    <StatusBar/>
    <View style={container}>
      <View style={box}>
        <Text style={boxText}>A</Text>
      </View>
      <View style={box}>
        <Text style={boxText}>B</Text>
      </View>
      <View style={box}>
        <Text style={boxText}>C</Text>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%'
  },
  box: {
    height: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },
  boxText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24
  }
});
