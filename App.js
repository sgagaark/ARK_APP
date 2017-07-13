import React, { Component } from 'react';
import { AppRegistry, ScrollView, Text, View } from 'react-native';
import { MainRouter } from './Router';
// import { DrawerRouter } from './Router';
import HisSendmoreseceen from './components/history/historysend/hissendmore/HisSendmoreseceen';
import HisRecmore from './components/history/historyrecive/hisrecdmore/HisRecmore';


class App extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  Router: 'LoginRouter',
            };
      }

      render() {
            return (
                  <MainRouter />
            )
      }
}
export default App;

AppRegistry.registerComponent('ARK_APP', () => App);