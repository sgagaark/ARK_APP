import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'

import { MainRouter } from './Router';
import { TabRouter } from './Router';
// import { DrawerRouter } from './Router';
import HistorySendMoreScreen from './components/history/historysend/sendmore/HistorySendMoreScreen';
import HistoryReceiveMore from './components/history/historyreceive/receivemore/HistoryReceiveMore';


const App = () => (
      <Provider store={createStore(reducers)}>
            <MainRouter />
      </Provider>
)

export default App;

AppRegistry.registerComponent('ARK_APP', () => App);