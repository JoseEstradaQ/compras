import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Alert } from 'react-native';
import { Text, Button, Card } from 'react-native-paper';
import Header from '../components/Header';

const ShoppingCart = () => {
  
  const [cartItems, setCartItems] = useState([
    { id: '1', name: 'Producto 1', price: 29.99, quantity: 1 },
    { id: '2', name: 'Producto 2', price: 15.49, quantity: 2 },
  ]);

  
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  
  const handleCheckout = () => {
    const totalAmount = calculateTotal();

    
    Alert.alert(
      'Comprobante de Pago',
      `Gracias por tu compra.\n\nTotal pagado: $${totalAmount}\n\n¡Tu pedido ha sido realizado exitosamente!`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Carrito de Compras</Text>
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
        <Button mode="contained" style={styles.button} onPress={handleCheckout}>
          Pagar
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

export default ShoppingCart;
