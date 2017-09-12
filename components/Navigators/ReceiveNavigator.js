import { StackNavigator } from 'react-navigation';
import Receive from '../Views/Receive/Receive';
import Reply from '../Views/Receive/Reply';


export default ReceiveNavigator = StackNavigator({
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
    Reply: {
        screen: Reply,
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
