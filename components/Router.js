import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image, Button } from 'react-native';
import { TabNavigator, StackNavigator, } from 'react-navigation';
import { Icon } from 'react-native-elements';


import Login from './login/Login';
import Forgot from './login/forgot';
import Forgot2 from './login/forgot2';
import Signup from './login/signup';
import Signup2 from './login/signup2';
import Signup3 from './login/signup3';

import Logout from './logout/logout';
import Receive from './receive/receive';
import Send from './send/send';
import HistoryScreen from './history/HistoryScreen';

import HistoryReceiveMore from './history/historyreceive/receivemore/HistoryReceiveMore';
import HistorySendMoreScreen from './history/historysend/sendmore/HistorySendMoreScreen';
import ReceiveReply from './receive/ReceiveReply';
import ReceiveReplyCardInput from './receive/ReceiveReplyCard/ReceiveReplyCardInput'

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
  }
}, {
    headerMode: 'none',
  }
);

// 這裡需要看你怎麼做(這裡是receive點船進入的畫面切換StackNavigator)
export const ReceiveStackRouter = StackNavigator({
  // 很多船的畫面
  Receive: {
    screen: Receive,
    navigationOptions: {
      //title: '今天收到的船',
      header:
      {
        titleStyle: {
          fontSize: 17,
          color: '#ffffff'
        },
        style: {
          backgroundColor: '#68accb',
          height: 0,
        },
      },
    },
  },
  // 點船進入的畫面
  // 位置D:\app\ARK_APP\components\history\historyreceive/receviemore/HistoryReceiveMore.js
  ReceiveReply: {
    screen: ReceiveReply,
    navigationOptions: {
      headerBackTitleStyle: {
        color: 'red'
      },
      title: '收到的船',
      header: {
        titleStyle: {
          fontSize: 17,
          color: '#ffffff'
        },
        tintColor: '#ffffff',
        headerBackTitleStyle: {
          color: 'red'
        },
        style: {
          backgroundColor: '#68accb'
        },
      },
    },
  },
}, {
    mode: 'modal'
  });


// 這裡需要看你怎麼做(這裡是history裡面的StackNavigator)
export const HistoryScreenStackRouter = StackNavigator({
  // 主頁面可以切換送或收
  // 位置D:\app\ARK_APP\components\history\HistoryScreen.js
  HistoryScreen: {
    screen: HistoryScreen,
    navigationOptions: {
      title: '紙船紀錄',
      header: {
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
  HistoryReceiveMore: {
    screen: HistoryReceiveMore,
    navigationOptions: {
      title: '收到的船',
      header: {
        titleStyle: {
          fontSize: 17,
          color: '#ffffff'
        },
        tintColor: '#ffffff',
        style: {
          backgroundColor: '#68accb'
        },
      }
    },
  },
  // 點送船的卡可以進入到更多裡的兩個切換頁
  // 位置D:\app\ARK_APP\components\history\historysend\sendmore\HistorySendMoreScreen.js
  HistorySendMoreScreen: {
    screen: HistorySendMoreScreen,
    navigationOptions: {
      title: '送出的訊息',
      header: {
        titleStyle: {
          fontSize: 17,
          color: '#ffffff'
        },
        tintColor: '#ffffff',
        style: {
          backgroundColor: '#68accb'
        },
      },
    },
  },
}, {
    mode: 'modal'
  });

export const SendRouter = StackNavigator(
  {
    SendTab: {
      screen: Send,
    },
  }, {
    headerMode: 'none',
  }
)

//最後app.js抓的
export const TabRouter = TabNavigator(
  {

    ReceiveStackRouter: {
      screen: ReceiveStackRouter,
      navigationOptions: {
        tabBar: {
          label: 'Receive',
          icon: ({ tintColor }) =>
            <Image
              source={require('../assets/tabicons/default/btnReceive.png')}
              style={[styles.icon, { tintColor: tintColor }]}
            />
        },
      },
    },

    SendTab: {
      screen: SendRouter,
      navigationOptions: {
        tabBar: {
          label: 'Send',
          icon: ({ tintColor }) =>
            <Image
              source={require('../assets/tabicons/default/btnSend.png')}
              style={[styles.icon, { tintColor: tintColor }]}
            />
        },
      },
    },
    // 這裡是抓history的StackNavigator
    HistoryScreenStackRouter: {
      screen: HistoryScreenStackRouter,
      navigationOptions: {
        tabBar: {
          label: 'History',
          icon: ({ tintColor }) =>
            <Image
              source={require('../assets/tabicons/default/btnClock.png')}
              style={[styles.icon, { tintColor: tintColor }]}
            />
        },
      },
    },
    LogoutTab: {
      screen: Logout,
      navigationOptions: {
        tabBar: {
          label: 'Logout',
          icon: ({ tintColor }) =>
            <Image
              source={require('../assets/tabicons/default/faSignOutGrBig.png')}
              style={[styles.icon, { tintColor: tintColor }]}
            />
        },
      },
    },
  },
  {
    animationEnabled: 'true',
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#42758c',
    }
  }
);

//Login轉Content
export const MainRouter = StackNavigator({
  MainScreen: {
    screen: LoginRouter,
  },
  ContentScreen: {
    screen: TabRouter,
  }
},
  {
    headerMode: 'none',
  }
)

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 33,
  },
  back: {
    color: 'red',
  }
});