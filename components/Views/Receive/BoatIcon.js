import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
//import SvgUri from 'react-native-svg-uri';

// Make a component
class BoatIcon extends Component {

  render() {
    const { botimg, textstyle } = styles;
    return (

      <View style={botimg}>
        <Text style={textstyle}>台中市</Text>
        <TouchableOpacity onPress={() => { this.showBoat() }}>
          <Image
            source={require('../../../assets/receive/bboatLine.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }

  showBoat() {
    this.props.navigation.navigate('Reply', { data: this.props.data });
  }
}

const styles = StyleSheet.create({
  botimg: {
    backgroundColor: 'transparent',
    width: 54,
  },
  textstyle: {
    fontSize: 12,
    textAlign: "center",
    color: "#ffffff",
    textShadowColor: "#00000080",
    textShadowOffset: {
      width: 0,
      height: 0
    },
    textShadowRadius: 2
  },
})
export default BoatIcon;
