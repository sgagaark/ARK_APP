import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import HistoryReceiveMoreCardMain from './HistoryReceiveMoreCard/HistoryReceiveMoreCardMain';
import HistoryReceiveMoreCardOther from './HistoryReceiveMoreCard/HistoryReceiveMoreCardOther';
import HistoryReceiveMoreCardInput from './HistoryReceiveMoreCard/HistoryReceiveMoreCardInput';
// Make a component
class HistoryReceiveMore extends Component {
  state = { hissendmore: [] };


  render() {
    const { bgcolor, } = styles;
    return (
      <ScrollView style={bgcolor}>
        <View>
          <HistoryReceiveMoreCardMain />
        </View>
        {/*回復過出現*/}
        <View>
          {<HistoryReceiveMoreCardOther/>}
        </View>
        {/*沒回覆過出現*/}
        <View>
          {/* <HistoryRecivecMoreCardInput/>*/}
        </View>
      </ScrollView>

    );
  }
}
const styles = StyleSheet.create({
  bgcolor: {
    // justifyContent:'center',
    // alignItems:'center',
  }
})
export default HistoryReceiveMore;
