import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import Header from '../components/Header';

const ShoppingCart = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text>Carrito de compras</Text>
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

export default ShoppingCart;