import { StackNavigator } from 'react-navigation';

import Login from './components/login/Login';
import Forgot from './components/login/forgot';
import Forgot2 from './components/login/forgot2';
import Signup from './components/login/signup';
import Signup2 from './components/login/signup2';
import Signup3 from './components/login/signup3';

export const LoginRouter = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: 'Login',
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
