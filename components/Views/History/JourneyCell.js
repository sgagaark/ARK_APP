import React, { Component } from 'react';
import { ScrollView,StyleSheet,View,Text,Image } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import moment from 'moment';

// Make a component
class JourneyCell extends Component {
  state = { JourneyCell: [] };


  render() {
    const {container,leftstyle,lefttextstyle,centerstyle,rightstyle,textstyle,whitelineUP,Round,whitelineDown} = styles;
    return (
      <View style={container}>
        <View style={leftstyle}>
          <View style={lefttextstyle}>
            <Text style={textstyle}>{moment(moment.now()).format('YYYY/MM/DD')}</Text>
          </View>
          <View style={lefttextstyle}>
            <Text style={textstyle}>{moment(moment.now()).format('hh:mm')}</Text>
          </View>          
        </View>
        <View style={centerstyle}>
          <View style={whitelineUP}></View>
          <View style={Round}></View>            
          <View style={whitelineDown}></View>          
        </View>
        <View style={rightstyle}>
          <View>
            <Text style={textstyle}>台灣 / 台中市</Text>            
          </View>
        </View>                
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    alignItems:'center',
    flexDirection:'row',
  },
  leftstyle:{
    width:70,
  },
  lefttextstyle:{
    alignItems:'flex-end',
  },
  centerstyle:{
    alignItems:'center',
    width:60,
  },
  rightstyle:{
    width:100,
    marginLeft: 12,
  },
  textstyle:{
    fontSize: 12,
    color:'#fefefe',
  },
  whitelineUP:{    
    width:3,
    height:33,
    backgroundColor:'#fefefe',
  },
  Round:{
    backgroundColor:'#fefefe',
    width: 10,
    height:10,
    borderStyle:'solid',
    borderRadius:5.4,
  },
  whitelineDown:{
    width:3,
    height:33,
    backgroundColor:'#fefefe',
  },
})
export default JourneyCell;
