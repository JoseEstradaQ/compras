import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Keyboard,
  ScrollView,
  Alert,
} from 'react-native';

import COLORS from '../constants/colors';
import Button from '../components/Button';
import Input from '../components/Input';
import Loader from '../components/Loader';
import Header from '../components/Header';

const UserRegistration = ({navigation}) => {
  const [inputs, setInputs] = React.useState({
    user: '',
    password: '',
    email: '',
    birthdate: '',
    address: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.user) {
      handleError('No deje el espacio vacío', 'user');
      isValid = false;
    } else if (inputs.user.length > 10) {
      handleError(
        'El nombre de usuario debe tener máximo 10 caracteres',
        'user',
      );
      isValid = false;
    }

    if (!inputs.password) {
      handleError('No deje el espacio vacío', 'password');
      isValid = false;
    } else if (inputs.password.length > 8) {
      handleError('La contraseña debe tener menos de 8 caracteres', 'password');
      isValid = false;
    } else if (!passwordRegex.test(inputs.password)) {
      handleError(
        'La contraseña debe incluir: 1 Mayúsculas, 1 caracter especial (@$!%*?&), letras y números',
        'password',
      );
      isValid = false;
    }

    if (!inputs.email) {
      handleError('No deje el espacio vacío', 'email');
      isValid = false;
    } else if (!emailRegex.test(inputs.email)) {
      handleError('Escriba un correo válido', 'email');
      isValid = false;
    }

    if (!inputs.birthdate) {
      handleError('No deje el espacio vacío', 'birthdate');
      isValid = false;
    } else if (inputs.birthdate < 18 || inputs.birthdate > 50) {
      handleError(
        'No está en el rango de edad para crear la cuenta (18-50)',
        'birthdate',
      );
      isValid = false;
    }

    if (!inputs.address) {
      handleError('No deje el espacio vacío', 'address');
      isValid = false;
    } else if (inputs.address.length > 30) {
      handleError('La dirección debe tener máximo 30 caracteres', 'address');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem('userData', JSON.stringify(inputs));
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
      }
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Header />
      <Loader visible={loading} />
      <ScrollView
        contentContainerStyle={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          Registrarse
        </Text>
        <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
          Escriba sus detalle para registrarse
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
            onChangeText={text => handleOnchange(text, 'user')}
            onFocus={() => handleError(null, 'user')}
            iconName="account-outline"
            label="Usuario"
            placeholder="Esciba su nombre de usuario"
            error={errors.user}
          />
          <Input
            onChangeText={text => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Contraseña"
            placeholder="Escriba su contraseña"
            error={errors.password}
            password
          />
          <Input
            onChangeText={text => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Correo"
            placeholder="Escriba su correo electrónico"
            error={errors.email}
          />

          <Input
            onChangeText={text => handleOnchange(text, 'birthdate')}
            onFocus={() => handleError(null, 'birthdate')}
            iconName="calendar-account"
            label="Edad"
            placeholder="Escriba su edad"
            keyboardType="numeric"
            error={errors.birthdate}
          />

          <Input
            onChangeText={text => handleOnchange(text, 'address')}
            onFocus={() => handleError(null, 'address')}
            iconName="home-edit-outline"
            label="Su dirección"
            placeholder="Escriba su dirección"
            error={errors.address}
          />
          <Button title="Register" onPress={validate} />
          <Text
            onPress={() => navigation.navigate('Login')}
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            Ya tienes una cuenta?
            <Text style={{color: COLORS.blue}}> Inicia sesión</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserRegistration;
