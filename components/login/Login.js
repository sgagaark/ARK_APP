import React, { Component } from 'react';
import { ScrollView, StyleSheet, TextInput, Text, View, Image, Button, Linking } from 'react-native';
import { FormLabel, FormValidationMessage, FormInput } from 'react-native-elements';
// Make a component
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            passwd: '',
        };
    }
    //const { navigate } = this.props.navigation;
    //const { container, textitle, butlogin, butforgot, butforgotin, loginsty, titlemargin } = styles;
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titlemargin}>
                    <Text style={styles.textitle}>登入會員</Text>
                </View>
                <View style={styles.loginsty}>
                    {/*輸入帳號*/}
                    <FormInput
                        onChangeText={(email) => { this.setState({ email }); }}
                        spellCheck={false}
                        keyboardType={'email-address'}
                    />
                </View>
                <View style={styles.loginsty}>
                    {/*輸入密碼   */}
                    <FormInput
                        onChangeText={(passwd) => { this.setState({ passwd }); }}
                        secureTextEntry={true}
                    />
                </View>
                <View style={styles.butlogin}>
                    <Button
                        //登入會員的按鈕
                        onPress={() => userLogin(this.state)}
                        title="登入"
                        color="#ffffff"
                        style={{ fontSize: 18 }}
                    />
                </View>
                <View style={styles.butforgot}>
                    <View style={styles.butforgotin}>
                        <Button
                            onPress={() => navigate('Forgot')}
                            title="忘記密碼"
                            color="#ffffff"
                            style={{ fontSize: 18 }}
                        />
                    </View>
                    <View style={styles.butforgotin}>
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

function userLogin(state) {
    fetch('http://www.rongserver.com/ark/api/userLogin', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: state.email,
            passwd: state.passwd,

        })
    }).then((data) => {
        //登入後
        console.log(data.body);
        userdataJson=JSON.parse(data.body);
        //userdataJson[0];
    }).catch((err) => {
        console.error(err);
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
