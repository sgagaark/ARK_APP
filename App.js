import React from 'react';
import { ScrollView, Text, View , AppRegistry } from 'react-native';
import {LoginRouter} from './Router';
import { TabRouter } from './Router';
// import { DrawerRouter } from './Router';


const App = () => (
  
      <TabRouter />
   );

export default App;

AppRegistry.registerComponent('ARK_APP',() => App);