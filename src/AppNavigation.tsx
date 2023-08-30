/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './ui/screens/HomeScreen';
import CartScreen from './ui/screens/CartScreen';
import ThirdScreen from './ui/screens/AboutScreen';
import AboutScreen from './ui/screens/AboutScreen';
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
        options={{

        }}
      />
      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          
        }}
      />
      <Stack.Screen
        name="About Screen"
        component={AboutScreen}
        options={{
        }}
      />
    </Stack.Navigator>
  );
}

export default AppNavigation;

const styles = StyleSheet.create({
  tabBar: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 0,
    width: 156,
    height: 44,
    borderRadius: 36,
    backgroundColor: '#ffffff',
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 16,
    shadowOpacity: 1,
    alignSelf: 'center',
    marginBottom: 30,
    borderTopWidth: 0,
  },
});
