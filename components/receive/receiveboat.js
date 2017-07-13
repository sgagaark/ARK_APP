import React, { Component } from 'react';
import { ScrollView,StyleSheet,View,Text,Image,TouchableOpacity } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import SvgUri from 'react-native-svg-uri';

// Make a component
class Receiveboat extends Component {
  state = { receiveboat: [] };


  render() {
    const {botimg,textstyle} = styles;
    return (

        <View style={botimg}>
          <Text style={textstyle}>新北市</Text>
          <TouchableOpacity onPress={this._onPressButton}>
            <Image
              source={require('../../assets/receive/bboatLine.png')}
            />
          </TouchableOpacity>
        </View>        
    );
  }
}

const styles = StyleSheet.create({
 botimg:{
  backgroundColor:'transparent',
  width:54,
 },
 textstyle:{
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
export default Receiveboat;