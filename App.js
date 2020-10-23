import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react'
import React from 'react';
import { Text, View, Button, Alert } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Home, Login, Cadastro, Alunos} from './views'

export default function App() {
  const [nome, setNome] = useState(null);
  const [endereco, setEndereco] = useState(null);
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        options={{
          title:'Bem vindo!',
          headerTintColor:'#333',
          headerStyle:{backgroundColor: 'orange'},
          headerTitleStyle:{fontWeight:'bold', alignSelf:'center'},
        }}
        component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Alunos" component={Alunos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
