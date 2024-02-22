import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import NavigationStack from './navigation/NavigationStack';
import {PaperProvider} from 'react-native-paper';
import {StatusBar} from 'react-native';
import NToast from 'react-native-toast-message';
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <StatusBar backgroundColor={'rgb(231, 200, 254)'} barStyle={'dark-content'} />
          <NavigationStack />
        </PaperProvider>
      </PersistGate>
      <NToast />
    </Provider>
  );
};

export default App;
