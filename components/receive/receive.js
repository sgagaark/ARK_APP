import React, { Component } from 'react';
import { ScrollView,StyleSheet,View,Text,Image } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';


// Make a component
class Receive extends Component {
  state = { receive: [] };


  render() {
    const {bgimg} = styles;
    return (
      <View>
        <Image source={require('../../assets/ntue.jpg')} style={bgimg}>
          <Text>Receive</Text>
          <Text>Receive</Text>
          <Text>Receive</Text>
          <Text>Receive</Text>
          <Text>Receive</Text>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 bgimg:{
  //  flex:1,
    //    width: null,
    // height: null,
   resizeMode:'cover',
 }
})
export default Receive;
