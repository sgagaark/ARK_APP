import { StackNavigator } from 'react-navigation';
import LoginNavigator from './LoginNavigator';
import ContentNavigator from './ContentNavigator';


export const AppNavigator = StackNavigator({
    ContentNavigator: {
        screen: ContentNavigator,
    },
    LoginNavigator: {
        screen: LoginNavigator,
    },

},
    {
        mode: 'modal',
        headerMode: 'none',
    }
)