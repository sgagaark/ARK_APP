import React, { Component } from 'react';
import { ScrollView,StyleSheet,View,Text,Image } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';


// Make a component
class HisSendcard extends Component {
  state = { history: [] };


  render() {
    const {bgcolor,titletext,context,timetext,imgstyle,contstyle,redpoint,redpointstyle} = styles;
    return (
      <View style={bgcolor}>
        <View style={redpointstyle}>
          {/*有新的回覆才出現*/}
          <View style={redpoint}></View>        
        </View>                       
        <View style={imgstyle}>
          <Image source={require('../../../assets/send/bboat.png')}/>
        </View>
        <View>
          <View>
            {/*標題*/}
            <Text style={titletext}>我一點都不勇敢</Text>
          </View>
          <View style={contstyle}>
            {/*內文*/}
            <Text style={context}>別擔心，你一定可以...</Text>
          </View>
          <View>
            {/*時間與地點*/}
            <Text style={timetext}>台灣 / 台北市     >>  2017/06/07</Text>
          </View>
        </View>
        <View>
          {/*有被回復過才出現*/}
          <Image source={require('../../../assets/iconMessage.png')}/>
        </View>
      </View>       
    );
  }
}
const styles = StyleSheet.create({
  bgcolor:{
    height:120,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    borderStyle: "solid",
    borderBottomWidth : 1,
    borderColor:"#dfdfdf",
  },
  titletext:{
    fontSize: 18,
    color:'#595959',
  },
  context:{
    fontSize: 14,
    color:'#696969',
  },
  timetext:{
    fontSize: 12,
    color:'#9f9f9f',
  },
  imgstyle:{
    marginRight:33,
    alignItems:'center',
    justifyContent:'center',
    width: 70,
    height:70,
    borderStyle:'solid',
    borderRadius:37.5,
    paddingBottom:2,
    shadowColor: '#dddddd',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 1
  },
  contstyle:{
    marginTop:8,
    marginBottom:19,
  },
  redpoint:{
    width: 10,
    height:10,
    backgroundColor:'#e4007f',
    borderColor:'#e4007f',
    borderStyle:'solid',
    borderRadius:5.4, 
  },
  redpointstyle:{
    marginRight:10,
  }
})
export default HisSendcard;
