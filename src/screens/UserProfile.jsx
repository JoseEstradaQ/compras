import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native-paper';
import Header from '../components/Header';

const UserProfile = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image 
          source={{ uri: 'https://example.com/profile-picture.jpg' }}
          style={styles.profileImage} 
        />
        <Text style={styles.name}>Jose Estrada</Text>
        <Text style={styles.email}>jose.estrada@correo.tdea.edu.co</Text>
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
    padding: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  email: {
    fontSize: 16,
    color: 'gray',
  },
});

export default UserProfile;