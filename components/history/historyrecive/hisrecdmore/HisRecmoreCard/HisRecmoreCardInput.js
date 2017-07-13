import React, { Component } from 'react';
import { ScrollView,StyleSheet,View,Text,Image,TouchableOpacity,Alert,TextInput } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';


// Make a component
class HisRecmoreCardInput extends Component {
  state = { hisrecmorecardothers: [] };


  render() {
    const {container,textstyle} = styles;
    return (
      <View style={container}>
        <View style={textstyle}>
          <TextInput
            style={{height: 295, borderColor: 'gray', borderWidth: 0}}
            onChangeText={(text) => this.setState({text})}
            placeholder="想跟他說的話  (內文)"
            multiline={true}
            //value={this.state.text}
          />  
        </View>          
      </View>       
    );
  }
}
const styles = StyleSheet.create({
    container:{

    borderStyle: "solid",
    borderTopWidth : 1,
    borderColor:"#dfdfdf",
    paddingTop:20,
    marginBottom:30,
    alignItems:'center',
  },
    textstyle:{
      alignItems:'center',
      width:290,
    },
})
export default HisRecmoreCardInput;
