import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppReducers from './components/reducers';


//import AppWithNavigationState from './components/navigators/AppNavigators';

import { AppNavigator } from './components/Navigators/AppNavigator';
//import { TabRouter } from './Router';


class ArkApp extends React.Component {
      render() {
            return (
                  <Provider store={createStore(AppReducers)} >
                        <AppNavigator />
                  </Provider >
            );
      }
}


AppRegistry.registerComponent('ARK_APP', () => ArkApp);
export default ArkApp;