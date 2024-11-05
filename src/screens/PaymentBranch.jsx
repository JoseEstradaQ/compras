import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import Header from '../components/Header';

const PaymentBranch = () => {

  const cartItems = [
    {
      id: '1',
      name: 'Producto de Ejemplo',
      price: 19.99,
      quantity: 2,
    },
  ];

  
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Sucursal de Pago</Text>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.productName}>{item.name}</Text>
                <Text>Cantidad: {item.quantity}</Text>
                <Text>Precio: ${item.price.toFixed(2)}</Text>
              </Card.Content>
            </Card>
          )}
        />
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
        </View>
        <Button mode="contained" style={styles.button}>
          Proceder al Pago
        </Button>
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
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  card: {
    marginVertical: 8,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalContainer: {
    marginTop: 16,
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default PaymentBranch;
