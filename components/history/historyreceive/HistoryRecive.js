import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import HistoryReceiveCard from './HistoryReceiveCard';

// 這頁是抓取HisSendcard的內容
// Make a component
class HistoryRecive extends Component {
  constructor(props) {
    super(props);
    this.state = { historyrecive: [] };

  }

  render() {
    return (
      <View>
        <HistoryReceiveCard {...this.props}/>
      </View>
    );
  }
}

export default HistoryRecive;
