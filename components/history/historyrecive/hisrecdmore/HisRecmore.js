import React, { Component } from 'react';
import { ScrollView,StyleSheet,View,Text,Image } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import HisRecmoreCardMY from './HisRecmoreCard/HisRecmoreCardMY';
import HisRecmoreCardothers from './HisRecmoreCard/HisRecmoreCardothers';
import HisRecmoreCardInput from './HisRecmoreCard/HisRecmoreCardInput';
// Make a component
class HisRecmore extends Component {
  state = { hissendmore: [] };


  render() {
    const {bgcolor,} = styles;
    return (
      <ScrollView style={bgcolor}>               
        <View>
          <HisRecmoreCardMY/>
        </View>
        {/*回復過出現*/}
        <View>
          {/*<HisRecmoreCardothers/>*/}
        </View>
        {/*沒回覆過出現*/}
        <View>
          <HisRecmoreCardInput/>
        </View>        
      </ScrollView>
             
    );
  }
}
const styles = StyleSheet.create({
  bgcolor:{
    // justifyContent:'center',
    // alignItems:'center',
  }
})
export default HisRecmore;
