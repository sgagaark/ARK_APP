import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from './components/login/Login';
import Forgot from './components/login/forgot';
import Forgot2 from './components/login/forgot2';
import Signup from './components/login/signup';
import Signup2 from './components/login/signup2';
import Signup3 from './components/login/signup3';

import Logout from './components/logout/logout';
import Receive from './components/receive/receive';
import Send from './components/send/send';
import History from './components/history/history';

export const LoginRouter = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: '登入',
    },
  },
  Forgot: {
    screen: Forgot,
    navigationOptions: {
      title: '忘記密碼',
    },
  },
    Forgot2: {
    screen: Forgot2,
    navigationOptions: {
      title: '寄送完成',
    },
  },
   Signup: {
    screen: Signup,
    navigationOptions: {
      title: '註冊',
    },
  },
    Signup2: {
    screen: Signup2,
    navigationOptions: {
      title: '電子信箱認證',
    },
  },
    Signup3: {
    screen: Signup3,
    navigationOptions: {
      title: '註冊完成',
    },
  },
});


export const TabRouter = TabNavigator(
  {
    Receive: {
      screen: Receive,
      navigationOptions: {
        tabBar: {
          label: 'Receive',
          //icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
        },
      },
    },
    Send: {
      screen: Send,
      navigationOptions: {
        tabBar: {
          label:'Send',
          //icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
        },
      },
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBar: {
          label: 'History',
          //icon: ({ tintColor }) => <Icon name="build" size={35} color={tintColor} />
        },
      },
    },
    Logout: {
      screen: Logout,
      navigationOptions: {
        tabBar: {
          label: 'Logout',
          //icon: ({ tintColor }) => <Icon name="build" size={35} color={tintColor} />
        },
      },
    },    
  },
  {
    animationEnabled: 'true',
  }
);