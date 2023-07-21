import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/app/home/Home';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawer from '../screens/app/drawer/Drawer';

const Stack = createDrawerNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      drawerContent={Drawer}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
