import React from 'react';
import { ScrollView, Text, View  } from 'react-native';
import {LoginRouter} from './Router';
import { TabRouter } from './Router';
// import { DrawerRouter } from './Router';
// import HisSendmoreseceen from './components/history/historysend/hissendmore/HisSendmoreseceen';
// import HisRecmore from './components/history/historyrecive/hisrecdmore/HisRecmore';
import Launch from './launch';

const App = () => (
      // 這是完成時需要的頁面
      <TabRouter />

      // 下面兩個需要你去做Stack Navigator
      // 這是history裡面Send的卡切進去的頁面
      // <HisSendmoreseceen/>
      // 這是history裡面recuve的卡切進去的頁面
      // <HisRecmore/>
   );

export default App;
