// src/screens/Home.jsx
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from '../components/Header';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text>Inicio</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
