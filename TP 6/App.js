import { StatusBar } from 'expo-status-bar';
import { Dirs, FileSystem } from 'react-native-file-access';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {useState, useEffect} from 'react';
import RNFS from 'react-native-fs';

export default function App() {
  const text = FileSystem.readFile(Dirs.CacheDir + '/test.txt');
  return (
    <SafeAreaView>
      <Text> {text}</Text>
    </SafeAreaView>
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
