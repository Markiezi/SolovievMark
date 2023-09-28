/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {
  const [count, setCount] = useState(0);
  return (
    <View
      style={[
        {
          justifyContent: 'center',
        },
      ]}>
      <Text style={styles2.sectionTitle}>Hello World!</Text>
      <Text>Lytkin Fedor FIIT-20</Text>
      <View style={styles.container}>
        <Text style={{fontSize: 30, marginBottom: 15}}>{count}</Text>
        <TouchableOpacity
          style={styles.roundButtonNumber}
          onPress={() => setCount(count + 1)}>
          <Text>+1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roundButtonNumber}
          onPress={() => setCount(count + 10)}>
          <Text>+10</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roundButtonNumber}
          onPress={() => setCount(count - 10)}>
          <Text>-10</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.roundButtonNumber}
          onPress={() => setCount(count - 1)}>
          <Text>-1 </Text>
        </TouchableOpacity>
      </View>

      <StatusBar />
    </View>
  );
}

const styles2 = StyleSheet.create({
  container: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundButtonNumber: {
    margin: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#D2CCC7',
  },
  roundButtonSign: {
    margin: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#906A4B',
  },
  roundButtonFunc: {
    margin: 1,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#5F6363',
  },
  roundButtonZero: {
    marginTop: 1,
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#D2CCC7',
  },
  symbolText: {
    fontSize: 50,
  },
  symbolTextSmall: {
    fontSize: 30,
  },
});

export default App;
