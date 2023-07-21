/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import Routes from './src/navigations/route';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SnackBar} from './src/components/snackBar';
import {Appearance} from 'react-native';

const App = () => {
  useEffect(() => {
    Appearance.setColorScheme('light');
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Routes />
          <SnackBar />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
