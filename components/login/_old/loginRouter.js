import { StackNavigator } from 'react-navigation';

import Login from './Login';
import Forgot from './forgot';
import Forgot2 from './forgot2';
import Signup from './signup';
import Signup2 from './signup2';
import Signup3 from './signup3';

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
