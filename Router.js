import React from 'react';
import { ScrollView,StyleSheet,View,Text,Image } from 'react-native';
import { TabNavigator, StackNavigator, } from 'react-navigation';
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
import HistoryScreen from './components/history/HistoryScreen';

import HisRecmore from './components/history/historyrecive/hisrecdmore/HisRecmore';
import HisSendmoreseceen from './components/history/historysend/hissendmore/HisSendmoreseceen';

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

// 這裡需要看你怎麼做(這裡是receive點船進入的畫面切換StackNavigator)
export const ReceiveStackRouter = StackNavigator({
  // 主頁面可以切換送或收
  Receive: {
    screen: Receive,
    navigationOptions: {
      title: 'Receive',
      header:{
        titleStyle: {
          fontSize: 17,
          color: '#ffffff'
        },
        style: {
          backgroundColor: '#68accb'
        },        
      },
    },
  },
  // 點船進入的畫面
  // 位置D:\app\ARK_APP\components\history\historyrecive\hisrecdmore\HisRecmore.js
  HisRecmore: {
    screen: HisRecmore,
    navigationOptions: {
      title: '收到的船',
      header:{
        titleStyle: {
          fontSize: 17,
          color: '#ffffff'
        },
        style: {
          backgroundColor: '#68accb'
        },        
      },
    },
  },
});


// 這裡需要看你怎麼做(這裡是history裡面的StackNavigator)
export const HistoryScreenStackRouter = StackNavigator({
  // 主頁面可以切換送或收
  // 位置D:\app\ARK_APP\components\history\HistoryScreen.js
  HistoryScreen: {
    screen: HistoryScreen,
    navigationOptions: {
      title: '紙船紀錄',
      header:{
        titleStyle: {
          fontSize: 17,
          color: '#ffffff'
        },
        style: {
          backgroundColor: '#68accb'
        },        
      },
    },
  },
  // 點收船的卡可以進入到更多
  // 位置D:\app\ARK_APP\components\history\historyrecive\hisrecdmore\HisRecmore.js
  HisRecmore: {
    screen: HisRecmore,
    navigationOptions: {
      title: '收到的船',
      header:{
        titleStyle: {
          fontSize: 17,
          color: '#ffffff'
        },
        style: {
          backgroundColor: '#68accb'
        },        
      },
    },
  },
  // 店送船的卡可以進入到更多裡的兩個切換頁
  // 位置D:\app\ARK_APP\components\history\historysend\hissendmore\HisSendmoreseceen.js
  HisSendmoreseceen: {
    screen: HisSendmoreseceen,
    navigationOptions: {
      title: '送出的訊息',
      header:{
        titleStyle: {
          fontSize: 17,
          color: '#ffffff'
        },
        style: {
          backgroundColor: '#68accb'
        },        
      },
    },
  },
});


//最後app.js抓的
export const TabRouter = TabNavigator(
  {
    ReceiveStackRouter: {
      screen: ReceiveStackRouter,
      navigationOptions: {
        // tabBar: {
        //   label: 'Receive',
        //   icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
        // },
        tabBarLabel: 'Receive',
        tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('./assets/tabicons/default/btnReceive.png')}
          style={[styles.icon, {tintColor: tintColor}]}
        />
        ),
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
    // 這裡是抓history的StackNavigator
    HistoryScreenStackRouter: {
      screen: HistoryScreenStackRouter,
      navigationOptions: {
        tabBar: {
          label: 'HistoryScreen',
          icon: ({ tintColor }) => <Icon name="build" size={35} color={tintColor} />
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
const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
});