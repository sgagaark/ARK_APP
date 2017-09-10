//註冊第一階段
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import { FormInput } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import axios from 'axios';

// Make a component
class Signup extends Component {
    state = {
        email: '',
        passwd: '',
        repasswd: '',
    };
    render() {
        // state = { Forgot: [] };
        const { navigate } = this.props.navigation;
        const { containerALL, container, butlogin, butforgot, loginsty, textitle, titlemargin, textlist } = styles;
        return (
            <KeyboardAwareScrollView getTextInputRefs={() => { return [this._textInputRef]; }} style={containerALL}>

                <View style={container}>
                    <View style={titlemargin}>
                        <Text style={textitle}>註冊會員</Text>
                    </View>
                    <View>
                        <Text style={textlist}>建立帳號 / 使用者名稱</Text>
                        <View style={loginsty}>
                            {/*設定帳號*/}
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
                        <Text style={textlist}>設定密碼</Text>
                        <View style={loginsty}>
                            {/*設定密碼*/}
                            <FormInput
                                autoCapitalize='none'
                                secureTextEntry={true}
                                spellCheck={false}
                                clearTextOnFocus={true}
                                placeholder='請輸入密碼'
                                keyboardType='default'
                                onChangeText={(passwd) => {
                                    this.setState({ passwd });
                                }}
                            />
                        </View>
                        <Text style={textlist}>確認密碼</Text>
                        <View style={loginsty}>
                            {/*確認密碼*/}
                            <FormInput
                                autoCapitalize='none'
                                secureTextEntry={true}
                                spellCheck={false}
                                clearTextOnFocus={true}
                                placeholder='請輸入密碼'
                                keyboardType='default'
                                onChangeText={(repasswd) => {
                                    this.setState({ repasswd });
                                }}
                            />
                        </View>
                    </View>
                    <View style={butlogin}>
                        <Button
                            onPress={() => navigate('Signup2')
                                //this.RegisterAccount();
                            }
                            title="下一步"
                            color="#ffffff"
                            style={{ fontSize: 18 }}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        );
    }

    //註冊帳號 
    /* RegisterAccount() {
      if (this.state.passwd != this.state.repasswd) {
        //密碼不一致
        alert("密碼不一致");
        return;
      } else {
        axios('/RegisterAccount', {
          method: 'post',
          baseURL: 'http://www.rongserver.com/ark/api/',
          data: {
            email: this.state.email,
            passwd: this.state.passwd
          }
        })
          .then((response) => {
            if (response.data['status']) {
              alert("註冊成功");
              this.props.navigation.navigate('Signup2');
            } else {
              this.props.navigation.navigate('Signup2');
            }
          }).catch((err) => {
            console.log(err);
          })
      }
    } */

}


const styles = StyleSheet.create({
    containerALL: {
        backgroundColor: '#68accb',
        //alignItems: 'center',
        //justifyContent: 'center',
        flex: 1,
    },
    container: {
        //backgroundColor: '#68accb',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 150,
        //flex: 1,
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

export default Signup;