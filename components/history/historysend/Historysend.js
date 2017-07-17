import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import HistorySendCard from './HistorySendCard';
import axios from 'axios';

// 這頁是抓取HisSendcard的內容
// Make a component
class HistorySend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: []
    };
  }



  render() {
    return (
      <View>
        <HistorySendCard {...this.props} />
      </View>
    );
  }
}
export default HistorySend;
