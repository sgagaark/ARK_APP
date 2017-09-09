import React, { Component } from 'react';
import { ScrollView,StyleSheet,View,Text,Image } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';


// Make a component
class HisSendjourneyCardtitle extends Component {
  state = { hissendjourneycardtitle: [] };


  render() {
    const {container,headerstyle,conststyle,Roundin,Roundout,textstyle,titletext,whiteline} = styles;
    return (
      <View style={container}>
        <View style={headerstyle}>
          <View style={Roundout}>
            <View style={Roundin}>
              <Image source={require('../../../../../assets/send/bboat.png')}/>
            </View>
          </View>
          {/*圖片結束*/}
          <View style={textstyle}>
            <View>
              <Text style={titletext}>台灣 / 台北市</Text>
            </View>
            <View>
              <Text style={titletext}>2017/07/17   21:43</Text>
            </View>
          </View>
        </View>
        {/*下面的槓槓*/}
        <View style={whiteline}>

        </View>                       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#106085',
    paddingLeft:111.5,
    paddingTop:40,
  },
  Roundin:{
    backgroundColor:'#fefefe',
    alignItems:'center',
    justifyContent:'center',
    width: 50,
    height:50,
    borderStyle:'solid',
    borderRadius:26.8,
    paddingBottom:2,
  },
  Roundout:{
    alignItems:'center',
    justifyContent:'center',
    width: 60,
    height:60,
    borderWidth:1,
    borderColor:'#fefefe',
    borderStyle:'solid',
    borderRadius:32.2,
  },
  headerstyle:{
    alignItems:'center',
    flexDirection:'row',
  },
  conststyle:{
    backgroundColor:'#56abc8',
    flex:1,
  },
  textstyle:{
    paddingLeft:12,
  },
  titletext:{
    fontSize: 14,
    color:'#fefefe',
  },
  whiteline:{
    width:3,
    height:22,
    backgroundColor:'#fefefe',
    marginLeft:28,
  }
})
export default HisSendjourneyCardtitle;
