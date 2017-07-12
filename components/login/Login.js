import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Button, Linking } from 'react-native';
import { FormLabel, FormValidationMessage, FormInput } from 'react-native-elements';
import axios from 'axios';
// Make a component
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      passwd: ''
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    const { container, textitle, butlogin, butforgot, butforgotin, loginsty, titlemargin } = styles;
    return (
      <View style={container}>
        <View style={titlemargin}>
          <Text style={textitle}>登入會員</Text>
        </View>
        <View style={loginsty}>
          {/*輸入帳號*/}
          <FormInput
            autoCapitalize='none'
            spellCheck={false}
            //clearTextOnFocus={true}
            placeholder='請輸入帳號'
            keyboardType='email-address'
            onChangeText={(email) => {
              this.setState({ email });
            }}
          />
        </View>
        <View style={loginsty}>
          {/*輸入密碼   */}
          <FormInput
            autoCapitalize='none'
            secureTextEntry={true}
            spellCheck={false}
            clearTextOnFocus={true}
            placeholder='請輸入密碼'
            keyboardType='default'
            onChangeText={(passwd) => {
              this.setState({ passwd });
            }} />
        </View>
        <View style={butlogin}>
          <Button
            //登入會員的按鈕
            onPress={() => UserLogin(this.state)}
            title="登入"
            color="#ffffff"
            style={{ fontSize: 18 }}
          />
        </View>
        <View style={butforgot}>
          <View style={butforgotin}>
            <Button
              onPress={() => navigate('Forgot')}
              title="忘記密碼"
              color="#ffffff"
              style={{ fontSize: 18 }}
            />
          </View>
          <View style={butforgotin}>
            <Button
              onPress={() => navigate('Signup')}
              title="註冊會員"
              color="#ffffff"
              style={{ fontSize: 18 }}
            />
          </View>
        </View>
      </View>
    );
  }
}

function UserLogin(state) {
  axios('/UserLogin', {
    method: 'post',
    baseURL: 'http://www.rongserver.com/ark/api/',
    data: {
      email: state.email,
      passwd: state.passwd

    }
  })
    .then((response) => {
      if (response.data['status']) {
        console.log('isLogin');
      } else {
        console.log('LoginFail');
      }
    }).catch((err) => {
      console.log(err);
    })
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#68accb',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  titlemargin: {
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
  loginsty: {
    width: 220,
    height: 60,
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
    marginBottom: 2,
    paddingTop: 10,
  },
  butlogin: {
    width: 220,
    height: 40,
    borderWidth: 4,
    borderColor: "#e4007f",
    borderRadius: 5,
    backgroundColor: "#e4007f",
    marginTop: 26,
    marginBottom: 20,
  },
  butforgot: {
    flexDirection: 'row',
    justifyContent: 'center',

  },
  butforgotin: {
    height: 40,
  },

})

export default Login;
