import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View, Button, Image, Linking, Alert } from 'react-native';
import { Tile, List, ListItem, FormInput } from 'react-native-elements';
import axios from 'axios';

// Make a component
class Signup2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sendtime: 1000 * 120,
    };
  }
  render() {
    const { navigate } = this.props.navigation;
    const { container, butlogin, butforgot, loginsty, textitle,
      titlemargin, textlist, butresend, texttitle2, titlemargin2 } = styles;
    return (
      <View style={container}>
        <View style={titlemargin}>
          <Text style={textitle}>電子信箱認證</Text>
        </View>
        <View style={titlemargin2}>
          <Text style={texttitle2}>請於註冊之電子信箱取得認證碼，並完成認證程序。</Text>
        </View>
        <View style={loginsty}>
          {/*輸入信箱*/}
          <FormInput />
        </View>
        <View style={butresend}>
          <Button
            onPress={() => Alert.alert('認證碼已重新寄出')}
            title="重寄驗證碼"
            color="#ffffff"
            style={{ fontSize: 18 }}
          />
        </View>
        <View style={butlogin}>
          <Button
            onPress={() => navigate('Signup3')}
            title="下一步"
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
export default Signup2;
