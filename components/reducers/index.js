import { combineReducers } from 'redux';
import { NavigationActions, StackNavigator } from 'react-navigation';

import { AppNavigator, LoginNavigator, TabRouter, HistoryScreenStackNavigator, ReceiveStackNavigator } from '../navigators/AppNavigators';

const HistoryScreenStackNavigatorScreen = LoginNavigator.router.getActionForPathAndParams('Login');
//const ReceiveStackNavigatorScreen = ReceiveStackNavigator.router.getActionForPathAndParams('Receive');
// const LoginNavScreen = LoginNavigator.router.getActionForPathAndParams('Login');
// const TabRouterScreen = TabRouter.router.getActionForPathAndParams('ReceiveStackRouter');
//const tempNavState = AppNavigator.router.getStateForAction(firstAction);
//const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const AppNavScreen = AppNavigator.router.getStateForAction(HistoryScreenStackNavigatorScreen);


function App_nav(state = AppNavScreen, action) {
    let nextState;
    console.log(state);
    console.log(action);
    switch (action.type) {
        // case 'Login':
        //     nextState = AppNavigator.router.getStateForAction(
        //         NavigationActions.back(),
        //         state
        //     );
        //     break;
        // case 'Logout':
        //     nextState = AppNavigator.router.getStateForAction(
        //         NavigationActions.navigate({ routeName: 'Login' }),
        //         state
        //     );
        //     break;

        // default:
        //     nextState = AppNavigator.router.getStateForAction(action, state);
        //     break;

    }

    return nextState || state;
}

// const initialAuthState = { isLoggedIn: false };

// function auth(state = initialAuthState, action) {
//     switch (action.type) {
//         case 'Login':
//             return { ...state, isLoggedIn: true };
//         case 'Logout':
//             return { ...state, isLoggedIn: false };
//         default:
//             return state;
//     }
// }


function ReplyBoat(state = [], action) {
    switch (action.type) {
        case 'setReplyBoat':
            return state = { Boats: action.data, isCompelete: true };
        default:
            return state = { Boats: [], isCompelete: false };
    }
}

function SelectedReplyBoat(state = [], action) {
    switch (action.type) {
        case 'setSelectedReplyBoat':
            return state = { Boat: action.data, isCompelete: true }
        default:
            return state = { Boat: null, isCompelete: false };
    }
}

//MyReplyBoat = () => [[], false];

export default combineReducers({
    SelectedReplyBoat, ReplyBoat, App_nav, //auth, 
});
//export default AppReducer;

