import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import {Home, Login, Alunos} from './views/Index';
import AreaRestrita from './views/AreaRestrita';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        options={{
          title:'Sistema de cadastro de alunos',
          headerTintColor:'#333',
          headerStyle:{backgroundColor: 'orange'},
          headerTitleStyle:{fontWeight:'bold', alignSelf:'center'},
        }}
        component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Alunos" component={Alunos} />
        <Stack.Screen name="AreaRestrita" component={AreaRestrita} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
