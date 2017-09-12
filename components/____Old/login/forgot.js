import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Image, Linking, Alert } from 'react-native';
import { List, ListItem, FormInput } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
// Make a component
class Forgot extends Component {
  // state = { Forgot: [] };
  render(){
    const {navigate} = this.props.navigation;
    const {containerALL,container,butlogin,butforgot,loginsty,textitle,
      titlemargin,textlist,butresend,texttitle2,titlemargin2} = styles;
    return (
      <KeyboardAwareScrollView getTextInputRefs={() => { return [this._textInputRef]; }}style={containerALL}>
      <View style={container}>
        <View style={titlemargin}>
          <Text style={textitle}>忘記密碼</Text>
        </View>
        <View style={styles.titlemargin2}>
          <Text style={styles.texttitle2}>請於輸入註冊之電子信箱，系統將寄送新密碼給您。</Text>
        </View>
        <View style={styles.loginsty}>
          {/*輸入信箱*/}
          <FormInput />
        </View>
        <View style={styles.butlogin}>
          <Button
            onPress={() => this.props.navigation.navigate('Forgot2')}
            title="下一步"
            color="#ffffff"
            style={{ fontSize: 18 }}
          />
        </View>
      </View>
      </KeyboardAwareScrollView>
    );
  }
}
const styles = StyleSheet.create({
  containerALL:{
    backgroundColor: '#68accb',
    //alignItems: 'center',
    //justifyContent: 'center',
    flex: 1,
  },
  container: {
    //backgroundColor: '#68accb',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop:150,
    //flex: 1,
  },
  titlemargin:{
    marginBottom: 20,
  },
  titlemargin2: {
    width: 230,
    marginBottom: 20,
  },
  textitle: {
    color: '#ffffff',
    fontSize: 24,
    textShadowColor: 'gray',
    textShadowOffset: {
      width: 0,
      height: 1
    },
    textShadowRadius: 4
  },
  texttitle2: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: "left",
    color: "#ffffff"
  }
  ,
  textlist: {
    fontSize: 14,
    textAlign: "left",
    color: "#ffffff"
  },
  loginsty: {
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
    paddingTop: 0,
  },
  butlogin: {
    width: 220,
    height: 40,
    borderWidth: 4,
    borderColor: "#e4007f",
    borderRadius: 5,
    backgroundColor: "#e4007f",
    marginTop: 48,
  },
  butresend: {
    width: 220,
    height: 40,
    borderWidth: 4,
    borderColor: "#568fa8",
    borderRadius: 5,
    backgroundColor: "#568fa8",
    marginTop: 66,
  },
  butforgot: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  butforgotin: {
    height: 40,
  },

})

export default Forgot;