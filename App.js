import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaInicial from './TelaInicial';
import TelaLogin from './TelaLogin';
import TabNavegacao from './TabNavegacao';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={TelaInicial} options={{headerTitleAlign: 'center', title: 'Início'}}/>
        <Stack.Screen name="Login" component={TelaLogin} options={{headerTitleAlign: 'center'}}/>
        <Stack.Screen name="Profissionais" component={TabNavegacao} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App