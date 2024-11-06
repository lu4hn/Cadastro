import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import HomeStyles from '../styles/HomeStyles';

export default function HomeScreen({ navigation }) {
  return (
    <View style={HomeStyles.container}>
      <Text style={HomeStyles.title}>TELA INICIAL</Text>
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={HomeStyles.buttonText}>    LOGAR    </Text>

      </TouchableOpacity>
      <TouchableOpacity style={HomeStyles.button} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={HomeStyles.buttonText}>CADASTRAR-SE</Text>
      </TouchableOpacity>
    
    </View>
  );
}