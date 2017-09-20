import React from 'react';
import { TabNavigator } from 'react-navigation';
import { StyleSheet, Image } from 'react-native';
import ReceiveNavigator from './ReceiveNavigator';
import SendNavigator from './SendNavigator';
import HistoryNavigator from './HistoryNavigator';
import CountNavigator from './CountNavigator'

export default ContentNavigator = TabNavigator(
    {
        ReceiveNavigator: {
            screen: ReceiveNavigator,
            navigationOptions: {
                tabBar: {
                    label: 'Receive',
                    icon: ({ tintColor }) =>
                        <Image
                            source={require('../../assets/tabicons/default/btnReceive.png')}
                            style={[styles.icon, { tintColor: tintColor }]}
                        />
                },
            },
        },
        SendNavigator: {
            screen: SendNavigator,
            navigationOptions: {
                tabBar: {
                    label: 'Send',
                    icon: ({ tintColor }) =>
                        <Image
                            source={require('../../assets/tabicons/default/btnSend.png')}
                            style={[styles.icon, { tintColor: tintColor }]}
                        />
                },
            },
        },
        HistoryNavigator: {
            screen: HistoryNavigator,
            navigationOptions: {
                tabBar: {
                    label: 'History',
                    icon: ({ tintColor }) =>
                        <Image
                            source={require('../../assets/tabicons/default/btnClock.png')}
                            style={[styles.icon, { tintColor: tintColor }]}
                        />
                },
            },
        },
        CountNavigator: {
            screen: CountNavigator,
            navigationOptions: {
                tabBar: {
                    label: 'BoatCount',
                    icon: ({ tintColor }) =>
                        <Image
                            source={require('../../assets/tabicons/default/btnStatisticsGr.png')}
                            style={[styles.icon, { tintColor: tintColor }]}
                        />
                },
            },
        }, 
    },
    {
        animationEnabled: 'true',
        tabBarOptions: {
            showLabel: false,
            activeTintColor: '#42758c',
        }
    }

);

const styles = StyleSheet.create({
    icon: {
        width: 40,
        height: 33,
    },
    back: {
        color: 'red',
    }
});