import React from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Text } from 'react-native-paper';
import Header from '../components/Header';



const ProductsCategories = ({ navigation }) => {
  // Imágenes locales para categorías
const categoryImages = {
  'Electrónica': require('../assets/images/categories/electronics.jpg'),
  'Ropa y Accesorios': require('../assets/images/categories/clothing.png'),
  'Hogar y Cocina': require('../assets/images/categories/home.jpg'),
  'Deportes': require('../assets/images/categories/sports.jpeg'),
  'Salud y Belleza': require('../assets/images/categories/beauty.jpeg'),
  'Juguetes': require('../assets/images/categories/toys.jpg'),
  'Libros': require('../assets/images/categories/books.jpg'),
  'Automotriz': require('../assets/images/categories/automotive.jpg'),
};

const categories = [
  { id: '1', name: 'Electrónica' },
  { id: '2', name: 'Ropa y Accesorios' },
  { id: '3', name: 'Hogar y Cocina' },
  { id: '4', name: 'Deportes' },
  { id: '5', name: 'Salud y Belleza' },
  { id: '6', name: 'Juguetes' },
  { id: '7', name: 'Libros' },
  { id: '8', name: 'Automotriz' },
];
  const handleCategoryPress = (category) => {
    // Navega a la pantalla de productos de la categoría seleccionada
    navigation.navigate('CategoryProducts', { categoryId: category.id, categoryName: category.name });
  };

  const renderCategory = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem} onPress={() => handleCategoryPress(item)}>
      <Image source={categoryImages[item.name]} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.title}>Categorías de Productos</Text>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE7F6',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A148C',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContainer: {
    flexGrow: 1,
  },
  categoryItem: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    alignItems: 'center',
  },
  categoryImage: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 18,
    color: '#4A148C',
    textAlign: 'center',
  },
});

export default ProductsCategories;
