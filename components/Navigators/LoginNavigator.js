import { StackNavigator } from 'react-navigation';
import Login from '../Views/Login/Login';

export default LoginNavigator = StackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      title: '登入',
    },
  },
  /* Forgot: {
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
  } */
}, {
    initialRouteName: 'Login',
    headerMode: 'none',
  }
);