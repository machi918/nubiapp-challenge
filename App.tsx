import {Router} from '@src/navigation';
import {store} from '@src/redux/store';
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import {Provider} from 'react-redux';

// import {Router} from 'navigation';
// import {store} from 'redux/store';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={'#FFFFFF'}
        />
      </SafeAreaView>
      <Router />
    </Provider>
  );
}

export default App;
