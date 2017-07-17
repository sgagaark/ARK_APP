import React, { Component } from 'react';
import { ScrollView,StyleSheet,View,Text,Image } from 'react-native';
// import Receiveboat from './receiveboat';
// Make a component
class Launch extends Component {
  state = { launch: [] };


  render() {
    const {container,positionstyle,roundin,roundout,imgstyle,} = styles;
    return (
      <View style={container}>
        <View style={positionstyle}>
          <View style={roundin}>
            <View style={roundout}>
            </View>
          </View>
          <View style={imgstyle}>
            <Image source={require('./assets/logoBoat.png')}>
            </Image>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container:{
  backgroundColor:'#68accb',
  flex:1,
  alignItems:'center',
  justifyContent:'center',  
 },
 positionstyle:{
  alignItems:'center',
 },
 roundin:{
  backgroundColor:'#ffffff',
  alignItems:'center',
  justifyContent:'center',
  width: 75,
  height:75,
  borderStyle:'solid',
  borderRadius:40,
 },
 roundout :{
  alignItems:'center',
  justifyContent:'center',
  width: 90,
  height:90,
  borderStyle:'solid',
  borderWidth:1,
  borderColor:'#ffffff',
  borderRadius:48,
  position:'absolute',
  zIndex:1,
 },
 imgstyle:{
  top:15,
  position:'absolute',
  zIndex:0,  
 },
})
export default Launch;
