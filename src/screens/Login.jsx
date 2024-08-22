import React from 'react';
import {View, Text, SafeAreaView, Keyboard, Alert} from 'react-native';
import COLORS from '../constants/colors';
import Button from '../components/Button';
import Input from '../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader';
import Header from '../components/Header';

const Login = ({navigation}) => {
  const [inputs, setInputs] = React.useState({user: '', password: ''});
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.user) {
      handleError('Por favor no deje en blanco el usuario', 'user');
      isValid = false;
    } else if (inputs.user.length > 10) {
      handleError(
        'El nombre de usuario debe tener máximo 10 caracteres',
        'user',
      );
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Por favor escriba su contraseña', 'password');
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
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem('userData');
      if (userData) {
        userData = JSON.parse(userData);
        if (
          inputs.user == userData.user &&
          inputs.password == userData.password
        ) {
          navigation.navigate('Home');
          AsyncStorage.setItem(
            'userData',
            JSON.stringify({...userData, loggedIn: true}),
          );
        } else {
          Alert.alert('Error', 'Información incorrecta');
        }
      } else {
        Alert.alert('Error', 'Usuario no encontrado');
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
      <View style={{paddingTop: 50, paddingHorizontal: 20}}>
        <Text style={{color: COLORS.black, fontSize: 40, fontWeight: 'bold'}}>
          Iniciar sesión
        </Text>
        <Text style={{color: COLORS.grey, fontSize: 18, marginVertical: 10}}>
          Escriba su usuario y contraseña
        </Text>
        <View style={{marginVertical: 20}}>
          <Input
            onChangeText={text => handleOnchange(text, 'user')}
            onFocus={() => handleError(null, 'user')}
            iconName="account-outline"
            label="Usuario"
            placeholder="Escriba su nombre de usuario"
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
          <Button title="Iniciar sesión" onPress={validate} />
          <Text
            onPress={() => navigation.navigate('Register')}
            style={{
              color: COLORS.black,
              fontWeight: 'bold',
              textAlign: 'center',
              fontSize: 16,
            }}>
            No tienes una cuenta?
            <Text style={{color: COLORS.blue}}> Regístrate</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
