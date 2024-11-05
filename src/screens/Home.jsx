import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, FlatList, TouchableOpacity, Animated } from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const productsData = [
  {
    id: '1',
    image: require('../assets/images/products/aspiradora.jpeg'),
    title: 'Aspiradora',
    description: 'Aspiradora de alta potencia.',
    
    
  },
  {
    id: '2',
    image: require('../assets/images/products/smartphone.jpg'),
    title: 'Smartphone',
    description: 'Último modelo de smartphone.',
    
    
  },
  
  {
    id: '3',
    image: require('../assets/images/products/Audifonos.jpeg'),
    title: 'Auriculares',
    description: 'Auriculares Bluetooth de alta calidad.',
  },
  {
    id: '4',
    image: require('../assets/images/products/CamaraDigital.jpeg'),
    title: 'Cámara Digital',
    description: 'Cámara digital con alta resolución.',
  },
  {
    id: '5',
    image: require('../assets/images/products/Televisor4K.jpeg'),
    title: 'Televisor 4K',
    description: 'Televisor 4K Ultra HD con HDR.',
  },
  {
    id: '6',
    image: require('../assets/images/products/Latop.jpeg'),
    title: 'Laptop Gaming',
    description: 'Laptop para videojuegos con alta velocidad.',
  },
  {
    id: '7',
    image: require('../assets/images/products/Nevera.jpeg'),
    title: 'Refrigerador',
    description: 'Refrigerador con tecnología de ahorro de energía.',
  },
  {
    id: '8',
    image: require('../assets/images/products/Micro.jpeg'),
    title: 'Microondas',
    description: 'Microondas con múltiples funciones de cocción.',
  },
  {
    id: '9',
    image: require('../assets/images/products/Reloj.jpeg'),
    title: 'Reloj Inteligente',
    description: 'Reloj inteligente con monitor de salud.',
  },
  {
    id: '10',
    image: require('../assets/images/products/Cafetera.jpeg'),
    title: 'Cafetera',
    description: 'Cafetera con función de programación.',
  },
];

const Home = () => {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState([]);
  const [expirationTimes, setExpirationTimes] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setFavorites((prevFavorites) => {
        const now = Date.now();
        const updatedFavorites = prevFavorites.filter(id => expirationTimes[id] > now);
        if (updatedFavorites.length !== prevFavorites.length) {
          setExpirationTimes(prev => {
            const newTimes = { ...prev };
            prevFavorites.forEach(id => {
              if (expirationTimes[id] <= now) delete newTimes[id];
            });
            return newTimes;
          });
        }
        return updatedFavorites;
      });
    }, 1000); 

    return () => clearInterval(interval); 
  }, [expirationTimes]);

  const toggleFavorite = (id) => {
    const now = Date.now();
    const expirationTime = now + 1000 * 60 * 60 * 24 * 10; 

    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.includes(id);
      if (isFavorite) {
        setExpirationTimes((prev) => {
          const { [id]: _, ...rest } = prev;
          return rest;
        });
        return prevFavorites.filter((fav) => fav !== id);
      } else {
        return [...prevFavorites, id];
      }
    });

    if (!expirationTimes[id]) {
      setExpirationTimes((prev) => ({
        ...prev,
        [id]: expirationTime,
      }));
    }
  };

  const isFavorite = (id) => favorites.includes(id);

  const formatTimeRemaining = (expirationTime) => {
    const now = Date.now();
    const timeRemaining = expirationTime - now;
    if (timeRemaining <= 0) return 'Expired';

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Image source={ item.image } style={styles.productImage} />
      <Text style={styles.productTitle}>{item.title}</Text>
      <Text style={styles.productDescription}>{item.description}</Text>
      {isFavorite(item.id) && expirationTimes[item.id] && (
        <Text style={styles.timerText}>
          Time Remaining: {formatTimeRemaining(expirationTimes[item.id])}
        </Text>
      )}
      <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.favoriteButton}>
        <Icon
          name={isFavorite(item.id) ? 'favorite' : 'favorite-border'}
          size={30}
          color={isFavorite(item.id) ? '#C71585' : '#666'}
        />
      </TouchableOpacity>
    </View>
  );

  const navigateToFavorites = () => {
    const favoritesData = productsData.filter((item) => favorites.includes(item.id));
    navigation.navigate('MyFavorites', { favoritesData, toggleFavorite });
  };

  const navigateToCart = () => {
    navigation.navigate('ShoppingCart');
  };

  const firstFavoriteId = favorites[0];
  const firstFavoriteExpirationTime = firstFavoriteId ? expirationTimes[firstFavoriteId] : null;
  const timerText = firstFavoriteExpirationTime ? formatTimeRemaining(firstFavoriteExpirationTime) : '';

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.title}>Nuestras Recomendaciones</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={navigateToFavorites} style={styles.iconButton}>
            <View style={styles.iconWithTimer}>
              <Icon name="favorite" size={30} color="#C71585" />
              {timerText && (
                <Text style={styles.iconTimerText}>{timerText}</Text>
              )}
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToCart} style={styles.iconButton}>
            <Icon name="shopping-cart" size={30} color="#C71585" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={productsData}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE7F6', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#D1C4E9', 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A148C', 
    flex: 1,
    textAlign: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 15,
  },
  row: {
    justifyContent: 'space-between',
  },
  productContainer: {
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    elevation: 2, 
    shadowColor: '#000', 
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  productImage: {
    width: '50%',
    height: 100,
    borderRadius: 8,
    alignSelf: 'center'
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  favoriteButton: {
    marginTop: 10,
  },
  timerText: {
    marginTop: 5,
    fontSize: 12,
    color: '#FF5722', 
  },
  iconWithTimer: {
    position: 'relative',
  },
  iconTimerText: {
    position: 'absolute',
    top: 35,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 10,
    color: '#FF5722',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 5,
    padding: 2,
  },
  
});

export default Home;