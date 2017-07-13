import React, { Component } from 'react';
import { ScrollView,StyleSheet,View,Text,Image } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import HisSendjourneyCardconst from './HisSendjourneyCard/HisSendjourneyCardconst';
import HisSendjourneyCardtitle from './HisSendjourneyCard/HisSendjourneyCardtitle';

// Make a component
class HisSendjourney extends Component {
  state = { hissendjourney: [] };


  render() {
    const {headerstyle,conststyle,whiteline} = styles;
    return (
      <View style={conststyle}>
        <View style={headerstyle}>
          {/*上方主圖區*/}
            <HisSendjourneyCardtitle/>
        </View>
        <View>
          {/*下方回復區*/}
          <HisSendjourneyCardconst/>
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
  headerstyle:{
    backgroundColor:'#106085',
  },
  conststyle:{
    backgroundColor:'#56abc8',
  },
  whiteline:{
    width:3,
    height:10,
    backgroundColor:'#fefefe',
    marginLeft:139.5,
    marginTop:5,
  }
})
export default HisSendjourney;
