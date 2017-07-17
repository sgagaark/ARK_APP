import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, ListView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import HistorySendMoreCardMain from './HistorySendMoreCard/HistorySendMoreCardMain';
import HistorySendMoreCardOther from './HistorySendMoreCard/HistorySendMoreCardOther';
// Make a component
class HistorySendMore extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      hissendmore: [],
      dataSource: ds.cloneWithRows('a', 'b', 'c'),
      MainIsLoading: false,
      ReplyIsLoading: false,
    };
  }


  render() {
    const { bgcolor, } = styles;
    return (
      <View style={bgcolor}>
        {this.getUserBoat()}
        {this.getBoatReply()}
      </View>
    );
  }

  //for HistorySendMoreCardMain
  getUserBoat() {
    if (this.state.MainIsLoading) {
      return (
        <View />
      )
    }
    return (
      <View>
        <HistorySendMoreCardMain />
      </View>
    )
  }

  //for HistorySendMoreCardOther
  getBoatReply() {
    if (this.state.ReplyIsLoading) {
      return (
        <View />
      )
    }
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <HistorySendMoreCardOther {...rowData} />}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  bgcolor: {
    // justifyContent:'center',
    // alignItems:'center',
  }
})
export default HistorySendMore;
