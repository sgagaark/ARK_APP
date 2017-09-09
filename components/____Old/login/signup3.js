import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Image, Linking } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import { NavigationActions } from 'react-navigation'
// Make a component
class Signup3 extends Component {
  render() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login' })
      ]
    })
    const { navigate } = this.props.navigation;
    const { container, butlogin, butforgot, loginsty, textitle,
      titlemargin, textlist, butresend, texttitle2, titlemargin2 } = styles;
    return (
      <View style={container}>
        <View style={titlemargin}>
          <Text style={textitle}>註冊完成</Text>
        </View>
        <View style={titlemargin2}>
          <Text style={texttitle2}>恭喜你成為 ark 的一份子，開始你的旅程吧！</Text>
        </View>
        <View style={butlogin}>
          <Button
            onPress={() => this.props.navigation.dispatch(resetAction)}
            title="登入"
            color="#ffffff"
            style={{ fontSize: 18 }}
          />
        </View>
      </View>
    );
  }
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
    marginTop: 15,
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
export default Signup3;
