import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Header from '../components/Header';

const HelpAndSupport = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const options = [
    'Administrar y cancelar compra',
    'Devoluciones',
    'Preguntas frecuentes'
  ];
  const accountOptions = [
    'Seguridad y acceso',
    'Privacidad'
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAccountMenu = () => {
    setIsAccountMenuOpen(!isAccountMenuOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsMenuOpen(false);
  };

  const handleAccountOptionSelect = (option) => {
    setSelectedOption(option);
    setIsAccountMenuOpen(false);
  };

  const handleSubmit = () => {
    // Aquí puedes manejar el envío de la opción seleccionada y el valor del input
    console.log('Opción seleccionada:', selectedOption);
    console.log('Valor del input:', inputValue);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{ uri: 'https://example.com/logo.png' }} style={styles.logo} />
        <Text style={styles.title}>Ayuda y Soporte</Text>
        <Text style={styles.subtitle}>Selecciona una opción y envía tu mensaje:</Text>
        <TouchableOpacity onPress={toggleMenu} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>
            {selectedOption ? selectedOption : 'Compras'}
          </Text>
        </TouchableOpacity>
        {isMenuOpen && (
          <View style={styles.menu}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuOption}
                onPress={() => handleOptionSelect(option)}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <TouchableOpacity onPress={toggleAccountMenu} style={styles.menuButton}>
          <Text style={styles.menuButtonText}>
            {selectedOption ? selectedOption : 'Ayuda sobre tu cuenta'}
          </Text>
        </TouchableOpacity>
        {isAccountMenuOpen && (
          <View style={styles.menu}>
            {accountOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={styles.menuOption}
                onPress={() => handleAccountOptionSelect(option)}
              >
                <Text>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
        <TextInput
          style={styles.input}
          placeholder="Descríbenos lo sucedido"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Button mode="contained" onPress={handleSubmit} style={styles.submitButton}>
          Enviar
        </Button>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Si necesitas ayuda adicional, por favor contáctanos en:</Text>
        <Text style={styles.contactInfo}>viruzsupport@ejemplo.com.co</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE7F6', // Fondo morado claro
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    color: '#4A148C', // Morado oscuro para el título
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#4A148C', // Morado oscuro para el subtítulo
  },
  menuButton: {
    padding: 10,
    backgroundColor: '#D1C4E9', // Morado más oscuro
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  menuButtonText: {
    fontSize: 16,
    color: '#4A148C', // Morado oscuro para el texto
  },
  menu: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    elevation: 3,
    marginBottom: 20,
    width: '100%',
  },
  menuOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#fff', // Fondo blanco para el campo de texto
  },
  submitButton: {
    width: '100%',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    backgroundColor: '#EDE7F6', // Fondo morado claro
  },
  footerText: {
    fontSize: 16,
    color: '#4A148C', // Morado oscuro para el texto del pie de página
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 16,
    color: '#4A148C', // Morado oscuro para la información de contacto
    fontWeight: 'bold',
  },
});

export default HelpAndSupport;
