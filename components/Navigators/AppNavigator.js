import { StackNavigator } from 'react-navigation';
import LoginNavigator from './LoginNavigator';


export const AppNavigator = StackNavigator({
    /*  ContentScreen: {
      screen: TabRouter,
    }  ,*/
    LoginNavigator: {
        screen: LoginNavigator,
    },

},
    {
        headerMode: 'none',
    }
)