import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';

import {Router} from '@src/navigation';
import {store} from '@src/redux/store';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={'light-content'} backgroundColor={'#202BCE'} />
        <Router />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;
