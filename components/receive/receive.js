import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
//import SvgUri from 'react-native-svg-uri';
import Receiveboat from './receiveboat';
// Make a component
class Receive extends Component {
  constructor(props) {
    super(props);
    this.state = { receive: [] };
  }


  render() {
    const { bgimg, botimg1, botimg2, botimg3, botimg4, botimg5 } = styles;
    return (
      <View>
        <View style={bgimg}>
          <Image source={require('../../assets/receive/bgSea.png')}>
          </Image>
        </View>
        <View style={botimg1}>
          <Receiveboat {...this.props} />
        </View>
        <View style={botimg2}>
          <Receiveboat {...this.props} />
        </View>
        <View style={botimg3}>
          <Receiveboat {...this.props} />
        </View>
        <View style={botimg4}>
          <Receiveboat {...this.props} />
        </View>
        <View style={botimg5}>
          <Receiveboat {...this.props} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bgimg: {
    position: 'absolute',
    zIndex: 0,
  },
  botimg1: {
    position: 'absolute',
    zIndex: 1,
    top: 327,
    left: 45,
    backgroundColor: 'transparent',
  },
  botimg2: {
    position: 'absolute',
    zIndex: 1,
    top: 434,
    left: 45,
    backgroundColor: 'transparent',
  },
  botimg3: {
    position: 'absolute',
    zIndex: 1,
    top: 379,
    left: 125,
    backgroundColor: 'transparent',
  },
  botimg4: {
    position: 'absolute',
    zIndex: 1,
    top: 350,
    left: 265,
    backgroundColor: 'transparent',
  },
  botimg5: {
    position: 'absolute',
    zIndex: 1,
    top: 481,
    left: 235,
    backgroundColor: 'transparent',
  },
})
export default Receive;
