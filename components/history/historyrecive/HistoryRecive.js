import React, { Component } from 'react';
import { ScrollView,StyleSheet,View,Text } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import HisReccard from './HisReccard';

// 這頁是抓取HisSendcard的內容
// Make a component
class HistoryRecive extends Component {
  state = { historyrecive: [] };
  

  render() {
    return (
        <View>
          <HisReccard/>
        </View>
    );
  }
}
export default HistoryRecive;
