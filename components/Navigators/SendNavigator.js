import React from 'react';
import { StackNavigator } from 'react-navigation';
import Send from '../Views/Send/Send';

export default SendNavigator = StackNavigator({
    Send: {
        screen: Send,
    },
},
    {
        headerMode: 'none',
    }
);