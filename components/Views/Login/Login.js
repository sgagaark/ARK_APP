//登入首頁
import React, { Component } from 'react';
import Server from '../../Server';
import { ScrollView, StyleSheet, Text, View, Image, Button, Linking, Alert } from 'react-native';
import { FormInput, } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { setUserLogin, getAroundBoat } from '../../actions'
import axios from 'axios';


// Make a component
class Login extends Component {
    state = {
        email: '',
        passwd: '',
        isLoging: false,
    };

    render() {
        const { navigate } = this.props.navigation;
        const { containerALL, container, textitle, butlogin, butforgot, butforgotin, loginsty, titlemargin } = styles;
        return (
            <KeyboardAwareScrollView getTextInputRefs={() => { return [this._textInputRef]; }} style={containerALL}>
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
                            /* onPress={() => this.props.navigation.dispatch(NavigationActions.back({
                                key: 0,
                            }))} */
                            onPress={() => this.UserLogin()}
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

            </KeyboardAwareScrollView>
        );
    }


    UserLogin() {
        const { dispatch, navigation } = this.props;
        if (this.state.isLoging)
            return;
        this.state.isLoging = true;
        axios('/UserLogin', {
            method: 'post',
            baseURL: Server('fulluri'),
            data: {
                email: this.state.email,
                passwd: this.state.passwd
            }
        })
            .then((response) => {
                this.setState({ isLoging: false });
                if (response.data['status']) {
                    dispatch(setUserLogin(response.data['data'][0]['id']));
                    navigation.dispatch(NavigationActions.back({
                        key: 0,
                    }))
                } else {
                    Alert.alert('登入', '帳號或密碼錯誤！');
                }
            }).catch((err) => {
                this.setState({ isLoging: false });
                Alert.alert('登入', '連線異常！');
            })
    }


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
        paddingTop: 200,
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


const mapStateToProps = state => {
    return {
        UserInfo: state.UserInfo,
    }
}


export default connect(mapStateToProps)(Login);
