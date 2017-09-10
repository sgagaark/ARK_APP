import { StackNavigator } from 'react-navigation';
import Login from '../Views/Login/Login';
import Forgot from '../Views/Login/Forgot';
import Forgot2 from '../Views/Login/Forgot2';
import Signup from '../Views/Login/Signup';
import Signup2 from '../Views/Login/Signup2';
import Signup3 from '../Views/Login/Signup3';

export default LoginNavigator = StackNavigator({
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
        initialRouteName: 'Login',
        headerMode: 'none',
    }
);