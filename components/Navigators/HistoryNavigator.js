import React from 'react';
import { TouchableOpacity, Image,View,StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HistoryView from '../Views/History/HistoryView';
import HistoryReceive from '../Views/History/HistoryReceive';
import HistorySend from '../Views/History/HistorySend';

const styles = StyleSheet.create({
    refreshbutton:{
        marginRight:20,
    },
    refreshimg:{
        width:20,
        height:20,
    }
})

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
                // 重新整理按鈕
                right: (
                    <TouchableOpacity
                    
                        onPress={() => { this._onPressButton }}
                    >
                        <View style={styles.refreshbutton}><Image
                        style={styles.refreshimg}
                        source={require('../../assets/refresh.png')} /></View>
                    </TouchableOpacity>
                ),
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
