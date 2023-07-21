import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/auth/login/login';

import RegisterScreen from '../screens/auth/register/register';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
