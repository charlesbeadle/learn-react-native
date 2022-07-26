import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function Home({ navigation }) {
  return (
      <>
        <StatusBar/>
        <View style={styles.container}>       
          <Button title="About" onPress={() => navigation.navigate("About")}/>
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
});
