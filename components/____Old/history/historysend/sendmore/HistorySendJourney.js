import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import HistorySendJourneyCardConst from './HistorySendJourneyCard/HistorySendJourneyCardConst';
import HistorySendJourneyCardTitle from './HistorySendJourneyCard/HistorySendJourneyCardTitle';

// Make a component
class HistorySendJourney extends Component {
  constructor(props) {
    super(props);
    this.state = { hissendjourney: [] };
  }

  render() {
    const { headerstyle, conststyle, whiteline } = styles;
    return (
      <View style={conststyle}>
        <View style={headerstyle}>
          {/*上方主圖區*/}
          <HistorySendJourneyCardTitle {...this.props} />
        </View>
        <View>
          {/*下方回復區*/}
          <HistorySendJourneyCardConst />
        </View>
        <View>
          <View style={whiteline}></View>
          <View style={whiteline}></View>
          <View style={whiteline}></View>
          <View style={whiteline}></View>
          <View style={whiteline}></View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  headerstyle: {
    backgroundColor: '#106085',
  },
  conststyle: {
    backgroundColor: '#56abc8',
  },
  whiteline: {
    width: 3,
    height: 10,
    backgroundColor: '#fefefe',
    marginLeft: 139.5,
    marginTop: 5,
  }
})
export default HistorySendJourney;
