import React from 'react';
import { AppRegistry,ScrollView, Text, View  } from 'react-native';
import {LoginRouter} from './Router';
import { TabRouter } from './Router';
// import { DrawerRouter } from './Router';


const App = () => (
  
      <LoginRouter />
   );

export default App;

AppRegistry.registerComponent('ark_app', () => App);