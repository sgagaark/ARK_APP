import React, { Component } from 'react';
import { ScrollView,StyleSheet,View,Text,Image,} from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';


// Make a component
class HisSendmoreCardMY extends Component {
  state = { hisSendmorecardmy: [] };


  render() {
    const {container,top,down,titletext,conttext,timetext,imgstyle,maptext,maptimestyle,mapstyle,titlstyle,contstyle} = styles;
    return (
      <View style={container}>
        <View>
        <View style={top}>               
          <View style={imgstyle}>
            <Image source={require('../../../../../assets/send/bboat.png')}/>
          </View>
          <View style={maptimestyle}>
            <View  style={mapstyle}>
              {/*地點*/}
              <Text style={maptext}>台灣/台北市</Text>
            </View>
            <View>
              {/*時間*/}
              <Text style={timetext}>>>  2017/06/02    14:00</Text>
            </View>
          </View>
        </View>
        {/*上方結束*/}
        <View style={down}>
          <View style={titlstyle}>
            {/*主題         */}
            <Text style={titletext}>我一點都不勇敢，希望有人可以鼓勵我，幫我加油打氣！</Text>
          </View>
          <View style={contstyle}>
            {/*內文*/}
            <Text style={conttext}>別擔心，你一定可以，要好好加油，這是我對自己說的話，但有時還是希望有其他人可以這樣對我說！

              別擔心，你一定可以，要好好加油
              這是我對自己說的話，
              但有時還是希望有其他人可以這樣對我說！

              別擔心，你一定可以，要好好加油，這是我對自己說的話，但有時還是希望有其他人可以這樣對我說！
            </Text>
          </View>
        </View>
        {/*下方結束        */}
        </View>
      </View>       
    );
  }
}
const styles = StyleSheet.create({
  container:{
    // borderStyle: "solid",
    // borderBottomWidth : 1,
    // borderColor:"#dfdfdf",
    marginTop:30,
    alignItems:'center',
  },
  top:{
    flexDirection:'row',
    marginBottom:36,
  },
  maptimestyle:{
    justifyContent:'center',
  },
  down:{
    width:290,
  },
  mapstyle:{
    marginBottom:5,
  },
  titlstyle:{
    marginBottom:25,
  },
  contstyle:{
    marginBottom:22,
    
  },  
  titletext:{
    fontSize:17,
    color:'#595959',
  },
  conttext:{
    fontSize: 13.5,
    color:'#595959',
    lineHeight: 20,
  },
  maptext:{
    fontSize: 12,
    color:'#9f9f9f',
  },
  timetext:{
    fontSize: 12,
    color:'#9f9f9f',
  },
  imgstyle:{
    marginRight:15,
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
})
export default HisSendmoreCardMY;
