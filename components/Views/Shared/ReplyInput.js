//共用  回復的輸入槽
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Alert, TextInput, Geolocation } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import Server from '../../Server';
import axios from 'axios';

class ReplyInput extends Component {
  state = {
    boatContent: '',
    isSending: false,
  }

  render() {
    const { container, textstyle, butstyle, buttextstyle } = styles;
    return (
      <KeyboardAwareScrollView getTextInputRefs={() => { return [this._textInputRef]; }}>
        <View style={container}>
          <ScrollView style={textstyle}>
            <TextInput
              ref={(r) => { this._textInputRef = r; }}
              style={{ height: 250, borderWidth: 0, fontSize: 14 }}
              onChangeText={(boatContent) => this.setState({ boatContent: boatContent })}
              placeholder="想跟他說的話  (內文)"
              multiline={true}
            //value={this.state.text}
            />
            <View >
              <TouchableOpacity onPress={() => this.sendReply()}
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
    const { boatId } = this.props
    const { dispatch, navigation } = this.props;
    if (this.state.isSending) {
      return;
    } else {
      this.setState({ isSending: true });
    }

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
        baseURL: Server('fulluri'),
        data: {
          userId: 0,
          boatId: boatId,
          boatContent: this.state.boatContent,
          boatLatitude: this.state.userlatitude,
          boatLongitude: this.state.userlongitude
        }
      })
        .then((response) => {
          if (response.data['status']) {
            Alert.alert('提示', '回信已送出');
            navigation.dispatch(NavigationActions.back({
              key: 0,
            }));
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
  butstyle: {
    height: 40,
    backgroundColor: '#e4007f',
    alignItems: 'center',
    justifyContent: 'center'

  },
  buttextstyle: {
    color: '#ffffff',
    fontSize: 18,
  }
})
export default ReplyInput;
