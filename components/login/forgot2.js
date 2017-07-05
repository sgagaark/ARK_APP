import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Image, Linking } from 'react-native';
import { List, ListItem } from 'react-native-elements';

// Make a component
const Forgot2 = (props) => {
  // state = { Forgot: [] };
    const {navigate} = props.navigation;
    const {container,butlogin,loginsty,textitle,
      titlemargin,textlist,texttitle2,titlemargin2} = styles;
    return (
      <View style={container}>
        <View style={titlemargin}>
          <Text style={textitle}>寄送完成</Text>
        </View>
        <View style={titlemargin2}>
          <Text style={texttitle2}>新密碼已寄送，請至註冊電子信箱收取新密碼。</Text>
        </View>
        <View style={butlogin}>
          <Button 
            onPress={() => navigate('Login')}
            title="登入"
            color="#ffffff"
            style={{fontSize:18}}
          />
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#68accb',
    alignItems:'center',
    justifyContent:'center',
    flex: 1,
  },
  titlemargin:{
    marginBottom: 20,
  },
  titlemargin2:{
    width:230,
    marginBottom: 20,
  },
  textitle:{
    color:'#ffffff',
    fontSize: 24,
    textShadowColor: 'gray',
    textShadowOffset: {
      width: 0,
      height: 1
      },
    textShadowRadius: 4
  },  
  texttitle2:{
    fontSize: 18,
    lineHeight: 28,
    textAlign: "left",
    color: "#ffffff"
  }
  ,
  textlist:{
    fontSize: 14,
    textAlign: "left",
    color: "#ffffff"
  },
  loginsty:{
    width: 220,
    height: 40,
    borderRadius: 5,
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 1
      },
    shadowRadius: 3,
    shadowOpacity: 1,
    marginBottom: 25,
    marginTop: 5,
    paddingTop:0,
  },  
  butlogin:{
    width: 220,
    height: 40,
    borderWidth:4,
    borderColor: "#e4007f",
    borderRadius: 5,
    backgroundColor: "#e4007f",
    marginTop: 48,
  },
})

export default Forgot2;