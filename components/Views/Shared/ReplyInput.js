//共用  回復的輸入槽
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Alert, TextInput, Geolocation } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import axios from 'axios';

class ReplyInput extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     hisrecmorecardothers: [],
  //     boatContent: '',
  //   };
  // }

  render() {
    const { container, textstyle,butstyle,buttextstyle } = styles;
    return (
      <KeyboardAwareScrollView getTextInputRefs={() => { return [this._textInputRef]; }}>
      <View style={container}>
        <ScrollView style={textstyle}>
          <TextInput
            ref={(r) => { this._textInputRef = r; }}
            style={{ height: 250, borderWidth: 0,fontSize:14 }}
            onChangeText={(boatContent) => this.setState({ boatContent: boatContent })}
            placeholder="想跟他說的話  (內文)"
            multiline={true}
            //value={this.state.text}
          />
                  <View >
          <TouchableOpacity /*onPress={() => this.sendReply()}*/
            style={butstyle}
            >
            <Text style={buttextstyle}>傳送</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </View>
      </KeyboardAwareScrollView>
    );
  }

  sendReply() {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Receive' })
      ]
    })
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition((pos) => {
      this.state.userlatitude = pos.coords.latitude;
      this.state.userlongitude = pos.coords.longitude;

      axios('/SendReply', {
        method: 'post',
        baseURL: 'http://www.rongserver.com/ark/api/',
        data: {
          userId: 0,
          boatId: this.props.navigation.state.params.data.boatId,
          boatContent: this.state.boatContent,
          boatLatitude: this.state.userlatitude,
          boatLongitude: this.state.userlongitude
        }
      })
        .then((response) => {
          if (response.data['status']) {
            Alert.alert('提示', '回信已送出');
            this.props.navigation.dispatch(resetAction);
          } else {
            console.log('Fail');
          }
        }).catch((err) => {
          console.log(err);
        })
    }
      , (error) => {
        console.log(error);
      }, options)
  }
}
const styles = StyleSheet.create({
  container: {
    borderStyle: "solid",
    borderTopWidth: 1,
    borderColor: "#dfdfdf",
    paddingTop: 20,
    marginBottom: 30,
    alignItems: 'center',
  },
  textstyle: {
    //alignItems: 'center',
    width: 290,
  },
  butstyle:{
    height:40,
    backgroundColor:'#e4007f',
    alignItems:'center',
    justifyContent:'center'

  },
  buttextstyle:{
    color:'#ffffff',
    fontSize:18,
  }
})
export default ReplyInput;
