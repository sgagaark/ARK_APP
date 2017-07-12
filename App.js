import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text, View } from 'react-native';
import { LoginRouter } from './Router';
import { TabRouter } from './Router';
// import { DrawerRouter } from './Router';


class App extends Component {
      render() {
            return (
                  <LoginRouter />
            )
      }
}

export default App;

AppRegistry.registerComponent('ark_app', () => App);