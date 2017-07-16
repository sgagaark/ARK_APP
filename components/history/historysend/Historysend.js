import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import HisSendcard from './HisSendcard';
import axios from 'axios';

// 這頁是抓取HisSendcard的內容
// Make a component
class Historysend extends Component {
  state = {
    history: [],
  };



  render() {
    return (
      <View>
        <HisSendcard />
      </View>
    );
  }
}
export default Historysend;
