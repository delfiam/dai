import Main from './others/Main';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/Login';
export default function App() {
  return (
   <Main></Main>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pag: {
    backgroundColor: "#044C24",
    height: '100%',
    width: '100%',
  },
});
