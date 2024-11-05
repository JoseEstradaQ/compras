import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Header'; 

const offersData = [
  {
    id: '1',
    image: require('../assets/images/products/smartphone.jpg'),
    title: 'Smartphone',
    description: 'Último modelo de smartphone.',
    discount: '10%',
  },
  {
    id: '2',
    image: require('../assets/images/products/Camisacuello.jpeg'),
    title: 'Playera de cuello redondo',
    description: 'Perfecta para salidas informales.',
    discount: '50%',
  },
  {
    id: '3',
    image: require('../assets/images/products/Gorra.jpeg'),
    title: 'Gorra de Beisbol',
    description: 'Perfecta Para Uso Diario Casual.',
    discount: '35%',
  },
  {
    id: '4',
    image: require('../assets/images/products/Llaves46.jpeg'),
    title: 'Juego de llaves',
    description: 'Juego de llaves de 46 piezas con trinquete.',
    discount: '20%',
  },
  {
    id: '5',
    image: require('../assets/images/products/Pendientesjpeg.jpeg'),
    title: 'Pendientes de Zirconia',
    description: 'Zirconia blanca, 4MM para Hombres.',
    discount: '25%',
  },
  {
    id: '6',
    image: require('../assets/images/products/RatonGamer.jpeg'),
    title: 'Mouse Gamer',
    description: 'Mouse Gamer con cable logitech G502 Hero, 11 Botones Programables.',
    discount: '15%',
  },
  {
    id: '7',
    image: require('../assets/images/products/Casco.jpeg'),
    title: 'Casco Para Motos',
    description: 'Casco De Moto Con Lentes Antivaho, Resina ABS Certificada.',
    discount: '30%',
  },
  {
    id: '8',
    image: require('../assets/images/products/GafasElegantes.jpeg'),
    title: 'Gafas Elegantes',
    description: 'Gafas elegantes Para Hombres, Eleccion Ideal Para Regalos.',
    discount: '40%',
  },
  {
    id: '9',
    image: require('../assets/images/products/Anillo.jpeg'),
    title: 'Anillo Vintage',
    description: 'Anillo Para Hombre Con Diseño de Dragon Chapado en Oro de 14K.',
    discount: '50%',
  },
  {
    id: '10',
    image: require('../assets/images/products/TarjetaGrafica.jpeg'),
    title: 'GeForce RTX 4060',
    description: 'Tarjeta gráfica Colorful IGame GeForce RTX 4060 Ultra W OC 8GB, 8GB 128-Bit GDDR6, HDTV+DP, GPU, Tarjeta de video para computadora.',
    discount: '5%',
  },
];

// Función para obtener el temporizador aleatorio
const getRandomTimer = () => {
  const random = Math.floor(Math.random() * 3);
  return random === 0 ? 86400 : random === 1 ? 172800 : 604800; // 1 día, 2 días o 1 semana en segundos
};

const Offers = () => {
  const navigation = useNavigation();
  const [timers, setTimers] = useState(
    offersData.map(() => getRandomTimer())
  );

  const [favorites, setFavorites] = useState([]);

  // Actualización del contador cada segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prevTimers) =>
        prevTimers.map((timer) => (timer > 0 ? timer - 1 : 0))
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Alterna favoritos
  const toggleFavorite = (id) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(id)
        ? prevFavorites.filter((fav) => fav !== id)
        : [...prevFavorites, id]
    );
  };

  // Verifica si un producto está en favoritos
  const isFavorite = (id) => favorites.includes(id);

  // Formatea el tiempo restante
  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) {
      return '0m 0s'; // Para evitar NaN o números negativos
    }

    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${days > 0 ? `${days}d ` : ''}${hours > 0 ? `${hours}h ` : ''}${minutes}m ${secs}s`;
  };

  // Renderiza cada oferta
  const renderOffer = ({ item, index }) => (
    <View style={styles.offerContainer}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.textContainer}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>
        {item.discount && <Text style={styles.discount}>Descuento: {item.discount}</Text>}
        <Text style={styles.timer}>Tiempo restante: {formatTime(timers[index])}</Text>
      </View>
      <TouchableOpacity onPress={() => toggleFavorite(item.id)} style={styles.iconButton}>
        <Icon
          name={isFavorite(item.id) ? 'favorite' : 'favorite-border'}
          size={30}
          color={isFavorite(item.id) ? '#C71585' : '#666'}
        />
      </TouchableOpacity>
    </View>
  );

  const navigateToCart = () => {
    navigation.navigate('ShoppingCart');
  };

  const navigateToFavorites = () => {
    const favoritesData = offersData.filter((item) => favorites.includes(item.id));
    navigation.navigate('MyFavorites', { favoritesData, toggleFavorite });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.header}>
        <Text style={styles.title}>Ofertas Especiales</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={navigateToFavorites} style={styles.iconButton}>
            <Icon name="favorite" size={30} color="#C71585" />
          </TouchableOpacity>
          <TouchableOpacity onPress={navigateToCart} style={styles.iconButton}>
            <Icon name="shopping-cart" size={30} color="#C71585" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={offersData}
        renderItem={renderOffer}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE7F6',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#D1C4E9',
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A148C',
    textAlign: 'center',
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 15,
  },
  offerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
    shadowColor: '#000',
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
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A148C',
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
  },
  discount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF5722',
    marginTop: 4,
  },
  timer: {
    marginTop: 8,
    fontSize: 14,
    color: '#FF5722',
  },
  listContainer: {
    paddingBottom: 20,
  },
});

export default Offers;

