import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import SegmentedControl from 'react-native-segmented-control';

import HistoryRecive from './historyreceive/HistoryRecive';
import HistorySend from './historysend/HistorySend';

import { StackNavigator } from 'react-navigation';

import HistoryReceiveMore from './historyreceive/receivemore/HistoryReceiveMore';
import HistorySendMoreScreen from './historysend/sendmore/HistorySendMoreScreen';
// Make a component
// 是用SegmentedControlIOS切換Historysend與Historyreceive的頁面
class HistoryScreen extends Component {
  constructor(props) {
    super(props);
    state = { history: [] };
  }


  render() {
    const { bgcolor, header, headertext, ScrollViewstyle, semgstyle } = styles;
    return (
      <View style={bgcolor}>
        {/*<View style={header}>
          <Text style={headertext}>紙船紀錄</Text>
        </View>*/}
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
                {/*收到的船抓的頁面*/}
                <HistoryRecive {...this.props} />
              </ScrollView>
            </SegmentedControl.Item>
            <SegmentedControl.Item
              title={'送出的訊息'}
            >
              <ScrollView style={ScrollViewstyle}>
                {/*送出的船抓的頁面*/}
                <HistorySend {...this.props} />
              </ScrollView>
            </SegmentedControl.Item>
          </SegmentedControl>
        </View>
        {/*<ScrollView style={ScrollViewstyle}>
          <HisSendMore/>
        </ScrollView>*/}
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
export default HistoryScreen;
