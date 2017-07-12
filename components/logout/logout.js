import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,Button } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';


// Make a component
class Logout extends Component {
  state = { logout: [] };


  render() {
  const {container,butlogout,titletext,contstyle,conttext} = styles;
    return (
      <View style={container}>
        <View >
          <Text style={titletext}>登出</Text>
        </View>
        <View style={contstyle}>
          <Text style={conttext}>是否登出 方舟 ark ?</Text>
        </View>
        <View style={butlogout}>
          <Button 
            //登入會員的按鈕
            onPress={() =>'null' }
            title="確認"
            color="#ffffff"
            style={{fontSize:18}}
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#68accb',
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
  },
  butlogout:{
    width: 220,
    height: 40,
    borderWidth:4,
    borderColor: "#e4007f",
    borderRadius: 5,
    backgroundColor: "#e4007f",
    marginTop: 26,
    marginBottom: 20,
  },
  titletext:{
    fontSize: 24,
    color: "#ffffff",
    textShadowOffset: {
      width: 0,
      height: 1
    },
    textShadowRadius: 4
  },
  conttext:{
    fontSize: 18,
    color: "#ffffff"
  },
  contstyle:{
    marginTop:20,
    marginBottom:60,
  },
})
export default Logout;
