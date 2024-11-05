import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Card } from 'react-native-paper';
import Header from '../components/Header';

const MyPurchases = () => {
  
  const [purchases, setPurchases] = useState([
    { id: '1', name: 'Producto 1', price: 29.99 },
    { id: '2', name: 'Producto 2', price: 15.49 },
    
  ]);

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Mis Compras</Text>
        <FlatList
          data={purchases}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card style={styles.card}>
              <Card.Content>
                <Text style={styles.productName}>{item.name}</Text>
                <Text>Precio: ${item.price.toFixed(2)}</Text>
              </Card.Content>
            </Card>
          )}
          ListEmptyComponent={<Text>No tienes compras aún.</Text>}
        />
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
});

export default MyPurchases;
