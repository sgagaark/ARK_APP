import React, { Component } from 'react';
import { ScrollView,StyleSheet,View,Text,Image } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import HisSendmoreCardMY from './HisSendmoreCard/HisSendmoreCardMY';
import HisSendmoreCardothers from './HisSendmoreCard/HisSendmoreCardothers';
// Make a component
class HisSendmore extends Component {
  state = { hissendmore: [] };


  render() {
    const {bgcolor,} = styles;
    return (
      <View style={bgcolor}>               
        <View>
          <HisSendmoreCardMY/>
        </View>
        <View>
          <HisSendmoreCardothers/>
          <HisSendmoreCardothers/>
          <HisSendmoreCardothers/>
          <HisSendmoreCardothers/>
          <HisSendmoreCardothers/>
          <HisSendmoreCardothers/>
        </View>
      </View>       
    );
  }
}
const styles = StyleSheet.create({
  bgcolor:{
    // justifyContent:'center',
    // alignItems:'center',
  }
})
export default HisSendmore;
