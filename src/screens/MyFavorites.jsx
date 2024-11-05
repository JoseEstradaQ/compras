import React from 'react';
import { View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';

const MyFavorites = ({ route, navigation }) => {
  // Lista de productos favoritos de ejemplo
  // Ese de favoritos toca cambiarlo, por ahora dejemolo asi de ine
  const favoritesData = [
    {
      id: '1',
      image: 'https://example.com/product1.jpg',
      title: 'Laptop',
      description: 'Último modelo de laptop.',
    },
    {
      id: '2',
      image: 'https://example.com/product2.jpg',
      title: 'Smartphone',
      description: 'Último modelo de smartphone.',
    },
    {
      id: '3',
      image: 'https://example.com/product3.jpg',
      title: 'Auriculares',
      description: 'Auriculares inalámbricos con cancelación de ruido.',
    },
    {
      id: '4',
      image: 'https://example.com/product4.jpg',
      title: 'Reloj Inteligente',
      description: 'Reloj con funciones de monitoreo de salud.',
    },
    {
      id: '5',
      image: 'https://example.com/product5.jpg',
      title: 'Tableta',
      description: 'Tableta con pantalla de alta resolución.',
    },
    {
      id: '6',
      image: 'https://example.com/product6.jpg',
      title: 'Cámara',
      description: 'Cámara DSLR con lentes intercambiables.',
    },
    {
      id: '7',
      image: 'https://example.com/product7.jpg',
      title: 'Parlante Bluetooth',
      description: 'Parlante portátil con alta calidad de sonido.',
    },
    {
      id: '8',
      image: 'https://example.com/product8.jpg',
      title: 'Teclado',
      description: 'Teclado mecánico con retroiluminación RGB.',
    },
    {
      id: '9',
      image: 'https://example.com/product9.jpg',
      title: 'Mouse',
      description: 'Mouse ergonómico con alta precisión.',
    },
    {
      id: '10',
      image: 'https://example.com/product10.jpg',
      title: 'Monitor',
      description: 'Monitor 4K con gran ángulo de visión.',
    },
  ];

  const { toggleFavorite } = route.params || {};

  const renderFavorite = ({ item }) => (
    <View style={styles.favoriteContainer}>
      <Image source={{ uri: item.image }} style={styles.productImage} />
      <View style={styles.textContainer}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
      </View>
      <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.iconButton}>
        <Icon
          name="favorite"
          size={30}
          color="red"
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.title}>Mis Favoritos</Text>
      </View>
      <FlatList
        data={favoritesData}
        renderItem={renderFavorite}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE7F6', // Fondo morado claro
  },
  header: {
    backgroundColor: '#D1C4E9', // Morado ligeramente más oscuro
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A148C', // Morado oscuro para el título
    textAlign: 'center',
  },
  favoriteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2, // Efecto de sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Color negro para los nombres de productos
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
  },
  iconButton: {
    padding: 10,
  },
});

export default MyFavorites;