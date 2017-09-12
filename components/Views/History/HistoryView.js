//歷史紀錄主畫面
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, } from 'react-native';
import SegmentedControl from 'react-native-segmented-control';

import HistoryRecive from './HistoryReceive';
import HistorySend from './HistorySend';
import MessageCell from './MessageCell';

// import HistoryReceiveMore from './historyreceive/receivemore/HistoryReceiveMore';
// import HistorySendMoreScreen from './historysend/sendmore/HistorySendMoreScreen';
class HistoryView extends Component {
    render() {
        const { bgcolor, header, headertext, ScrollViewstyle, semgstyle } = styles;
        return (
            <View style={bgcolor}>
                <View style={semgstyle}>
                    <SegmentedControl
                        defaultPage={0}
                        itemFontSize={17}
                        itemButtonColor='#f9f9f9'
                        itemButtonActiveColor='#f9f9f9'
                        itemTextColor='#9f9f9f'
                        itemTextActiveColor='#42758c'
                        itemButtonBorderColor='#f9f9f9'
                        itemButtonViewStyle={{

                            //paddingBottom:10,
                        }}
                        itemHeaderViewStyle={{
                            paddingVertical: 0,
                            height: 44,
                            borderBottomWidth: 1,
                            borderColor: "#dfdfdf",
                            justifyContent: 'center',

                        }}
                        ref={e => this.SegmentedControl = e}
                    >
                        <SegmentedControl.Item
                            title={'收到的船'}
                        >
                            <ScrollView style={ScrollViewstyle}>
                                {/*收到的船抓的頁面  要加listView*/}
                                <MessageCell type={'receive'}  {...this.props} />
                            </ScrollView>
                        </SegmentedControl.Item>
                        <SegmentedControl.Item
                            title={'送出的訊息'}
                        >
                            <ScrollView style={ScrollViewstyle}>
                                {/*送出的船抓的頁面  要加listView*/}
                                <MessageCell type={'send'} {...this.props} />
                            </ScrollView>
                        </SegmentedControl.Item>
                    </SegmentedControl>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bgcolor: {
        backgroundColor: '#f9f9f9',
        flex: 1,
    },
    header: {
        backgroundColor: "#68accb",
        justifyContent: 'center',
        alignItems: 'center',
        height: 64,
        paddingTop: 15,
    },
    headertext: {
        fontSize: 17,
        textAlign: "left",
        color: "#ffffff",
    },
    ScrollViewstyle: {

    },
    semgstyle: {
        flex: 1,
    },
})

export default (HistoryView);
