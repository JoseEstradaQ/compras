import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import Header from '../components/Header';

const products = [
  {
    id: '2',
    image: require('../assets/images/products/Afilador.jpeg'),
    title: 'Afilador Profesional',
    description: 'Afilador Profesional de 4 Etapas - Piedra de Afilar de Tungsteno, Diamante y Cerámica para Cuchillos de Cocina',
    price: '$ 12.887',
  },
  {
    id: '3',
    image: require('../assets/images/products/Piano.jpeg'),
    title: 'Teclado de control MIDI de 25 teclas',
    description: 'Mini teclado MIDI portátil con 25 teclas sensibles a la velocidad 8 pads retroiluminados RGB 8 perillas Eid Al-Adha Mubarak',
    price: '$ 332.732',
  },
  {
    id: '4',
    image: require('../assets/images/products/RelojEleganteH.jpeg'),
    title: 'Conjunto De 2 Piezas De Reloj De Pulsera',
    description: 'Conjunto De 2 Piezas De Reloj De Pulsera De Negocios Y Deporte Para Hombres Con Esfera De Fecha Analógica, Correa De Acero Y Pulsera.',
    price: '$ 20.567',
  },
  {
    id: '5',
    image: require('../assets/images/products/Microfono.jpeg'),
    title: 'Micrófono de Escritorio USB RIKSOIN',
    description: 'Juego de llaves de 46 piezas con trinquete.',
    price: '$ 75.240',
  },
  {
    id: '6',
    image: require('../assets/images/products/LucesT.jpeg'),
    title: 'T5 LED No Polar Luz Del Salpicadero Coche',
    description: 'T5 LED No Polar Luz Del Salpicadero Coche W3W 3014 interior Clúster Medidor De Cuña Advertencia auto Motocicleta Señal De La Lámpara.',
    price: '$ 2.560',
  },
  {
    id: '7',
    image: require('../assets/images/products/Einner.jpeg'),
    title: 'KZ ZSN Pro auriculares de Metal, 1BA 1DD',
    description: 'KZ ZSN Pro auriculares de Metal, 1BA 1DD + tecnología híbrida, auriculares de graves HIFI en el Monitor del oído, auriculares deportivos con cancelación de ruido.',
    price: '$ 36.954',
  },
  {
    id: '8',
    image: require('../assets/images/products/Fundas.jpeg'),
    title: 'Funda Para Iphone',
    description: 'Funda de silicona oficial Original para Apple iPhone 14, 13, 12, 15 Pro Max,.',
    price: '$ 15.799',
  },
  {
    id: '9',
    image: require('../assets/images/products/Bolso.jpeg'),
    title: 'Bolsa de almacenamiento de cables',
    description: 'Bolsa de almacenamiento de cables, organizador electrónico Digital a prueba de agua, cargador de línea de datos USB portátil, bolsa de almacenamiento de enchufes, organizador de cables de viaje.',
    price: '$ 22.679',
  },
  {
    id: '10',
    image: require('../assets/images/products/Ponchador.jpeg'),
    title: 'AMPCOM RJ45',
    description: 'AMPCOM RJ45, juego de herramientas para crimpador Lan, cable Ethernet, herramienta de perforación RJ 45, conectores RJ11, 12 en 1, juego de reparación de cableado.',
    price: '$ 30.000',
  },
];

const ProductDetail = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.content}>
        {products.map((product) => (
          <View key={product.id} style={styles.productCard}>
            <Image source={product.image} style={styles.image} resizeMode="contain" />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Añadir al carrito</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6FA', 
  },
  content: {
    padding: 20,
  },
  productCard: {
    marginBottom: 20,
    backgroundColor: '#FFFFFF', 
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  image: {
    width: '100%', 
    height: 150, 
    borderRadius: 10,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4B0082', 
    marginBottom: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF4500', 
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#000', 
    textAlign: 'center',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#4B0082', 
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetail;
