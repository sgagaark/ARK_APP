import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Image, Linking } from 'react-native';
import { List, ListItem, FormInput } from 'react-native-elements';

// Make a component
const Signup = (props) => {
  // state = { Forgot: [] };
    const {navigate} = props.navigation;
    const {container,butlogin,butforgot,loginsty,textitle,titlemargin,textlist} = styles;
    return (
      <View style={container}>
        <View style={titlemargin}>
          <Text style={textitle}>註冊會員</Text>
        </View>
        <View>
          <Text style={textlist}>建立帳號 / 使用者名稱</Text>
          <View style={loginsty}>
            {/*設定帳號*/}
            <FormInput />
          </View>       
            <Text style={textlist}>設定密碼</Text>
          <View style={loginsty}>
            {/*設定密碼*/}
            <FormInput />
          </View>
            <Text style={textlist}>確認密碼</Text>
          <View style={loginsty}>
            {/*確認密碼*/}
            <FormInput />
          </View>
        </View>
        <View style={butlogin}>
          <Button 
            onPress={() => navigate('Signup2')}
            title="下一步"
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
    marginTop: 26,
    marginBottom: 20,
  },
  butforgot:{
    flexDirection:'row',
    justifyContent:'center',

  },
  butforgotin:{
    height: 40,
  },
  
})

export default Signup;