/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './ui/screens/Home/HomeScreen';
import CartScreen from './ui/screens/Cart/CartScreen';
import AboutScreen from './ui/screens/About/AboutScreen';
const Stack = createStackNavigator();


function AppNavigation(): JSX.Element {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{}}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{}}
      />
      <Stack.Screen
        name="About Screen"
        component={AboutScreen}
        options={{}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigation;
