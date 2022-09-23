import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Src/Login';
import Client from './Src/Register/Client/index';
import Email from './Src/Register/Client/Page/PageEmail/Middle';
import Senha from './Src/Register/Client/Page/PageSenha/Middle';
import Endereco from './Src/Register/Client/Page/PageEndereco/Middle';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
      <Stack.Screen name="Client" options={{headerShown:false}} component={Client} />
      <Stack.Screen name="Email" options={{headerShown:false}} component={Email} />
      <Stack.Screen name="Senha" options={{headerShown:false}} component={Senha} />
      <Stack.Screen name="Endereco" options={{headerShown:false}} component={Endereco} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
