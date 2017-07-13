import React, { Component } from 'react';
import { ScrollView,StyleSheet,View,Text,Image } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';


// Make a component
class HisSendjourneyCardconst extends Component {
  state = { hissendjourneycardconst: [] };


  render() {
    const {container,leftstyle,centerstyle,rightstyle,textstyle,whitelineUP,Round,whitelineDown} = styles;
    return (
      <View style={container}>
        <View style={leftstyle}>
          <View>
            <Text style={textstyle}>2017/06/02</Text>
          </View>
          <View>
            <Text style={textstyle}>14:30</Text>
          </View>          
        </View>
        <View style={centerstyle}>
          <View style={whitelineUP}></View>
          <View style={Round}></View>            
          <View style={whitelineDown}></View>          
        </View>
        <View style={rightstyle}>
          <View>
            <Text style={textstyle}>台灣 / 桃園市</Text>            
          </View>
        </View>                
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    paddingLeft:50,
    alignItems:'center',
    flexDirection:'row',
  },
  leftstyle:{

  },
  centerstyle:{
    marginLeft:20,
    marginRight:20,
  },
  rightstyle:{

  },
  textstyle:{
    fontSize: 12,
    color:'#fefefe',
  },
  whitelineUP:{
    marginLeft:4,    
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
    marginLeft:4,
    width:3,
    height:33,
    backgroundColor:'#fefefe',
  },
})
export default HisSendjourneyCardconst;