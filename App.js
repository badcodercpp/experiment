/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
  StyleSheet, 
  Text, 
  View, 
  Image, 
  AsyncStorage } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import reducer from './reducer/index';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { PersistGate } from 'redux-persist/integration/react'
import PersistGateLoader from './component/loader/persistGateLoader'
import AllRoutes from './router/index'
import { mqtt } from './middleware/mqttMiddleware'
import {UUID} from './util/guid'
import init from 'react_native_mqtt';
//import { profileConfig } from './config_style/profile'
import { profileConfig } from './config_style/profile/index';

init({
  size: 10000,
  storageBackend: AsyncStorage,
  defaultExpires: 1000 * 3600 * 24,
  enableCache: true,
  reconnect: true,
  sync : {
  }
});

const uid=UUID();

const client = new Paho.MQTT.Client('iot.eclipse.org', 443, uid);

const persistConfig = {
  key: 'badcoder',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer)

const store = createStore(persistedReducer,applyMiddleware(thunk,mqtt(client)))

let persistor = persistStore(store)

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
    secondry:'white',
    profileConfig
  },
};

type Props = {};
export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state={};
  }
  render() {
    return (
      <Provider store={store} >
        <PersistGate loading={<PersistGateLoader />} persistor={persistor}>
          <PaperProvider theme={theme} >
              <AllRoutes />
          </PaperProvider>
        </PersistGate>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

