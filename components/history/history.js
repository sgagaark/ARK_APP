import React, { Component } from 'react';
import { ScrollView,View,Text } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';


// Make a component
class History extends Component {
  state = { history: [] };


  render() {
    return (
      <View>
        <Text>History</Text>
      </View>
    );
  }
}

export default History;
