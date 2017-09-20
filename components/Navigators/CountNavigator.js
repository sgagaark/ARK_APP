import React from 'react';
import { StackNavigator } from 'react-navigation';
import BoatCount from '../Views/BoatCount/BoatCount';

export default SendNavigator = StackNavigator({
    BoatCount: {
        screen: BoatCount,
    },
},
    {
        headerMode: 'none',
    }
);