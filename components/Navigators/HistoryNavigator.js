import React from 'react';
import { StackNavigator } from 'react-navigation';
import HistoryView from '../Views/History/HistoryView';
import HistoryReceive from '../Views/History/HistoryReceive';
import HistorySend from '../Views/History/HistorySend';

export default HistoryNavigator = StackNavigator({
    HistoryView: {
        screen: HistoryView,
        navigationOptions: {
            title: '紙船紀錄',
            header: {
                titleStyle: {
                    fontSize: 17,
                    color: '#ffffff'
                },
                style: {
                    backgroundColor: '#68accb'
                },
            },
        },
    },
    HistoryReceive: {
        screen: HistoryReceive,
        navigationOptions: {
            title: '收到的船',
            header: {
                titleStyle: {
                    fontSize: 17,
                    color: '#ffffff'
                },
                tintColor: '#ffffff',
                style: {
                    backgroundColor: '#68accb'
                },
            }
        },
    },
    HistorySend: {
        screen: HistorySend,
        navigationOptions: {
            title: '送出的訊息',
            header: {
                titleStyle: {
                    fontSize: 17,
                    color: '#ffffff'
                },
                tintColor: '#ffffff',
                style: {
                    backgroundColor: '#68accb'
                },
            },
        },
    },
}, {
        mode: 'modal'
    });