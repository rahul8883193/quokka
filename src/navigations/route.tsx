import React from 'react';
import AuthNavigator from './authNavigator';
import AppNavigator from './appNavigatior';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useAppSelector} from '../redux/hooks';
import {selectUser} from '../redux/slices/authSlice';
const Stack = createStackNavigator();

const Routes = () => {
  const user = useAppSelector(selectUser);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={user?.uid ? 'app' : 'auth'}
          screenOptions={{headerShown: false}}>
          {user?.uid ? (
            <Stack.Screen name="app" component={AppNavigator} />
          ) : (
            <Stack.Screen name="auth" component={AuthNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default Routes;
