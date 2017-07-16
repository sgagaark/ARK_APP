import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers'

import { MainRouter } from './Router';
import { TabRouter } from './Router';
// import { DrawerRouter } from './Router';
import HisSendmoreseceen from './components/history/historysend/hissendmore/HisSendmoreseceen';
import HisRecmore from './components/history/historyrecive/hisrecdmore/HisRecmore';


const App = () => (
      <Provider store={createStore(reducers)}>
            <TabRouter />
      </Provider>
)

export default App;

AppRegistry.registerComponent('ARK_APP', () => App);