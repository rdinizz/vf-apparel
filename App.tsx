import 'react-native-gesture-handler';
import 'react-native-reanimated'
import React from 'react';
// redux
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from './src/AppNavigation';
import { store } from './src/services/redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
