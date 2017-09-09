import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import moment from 'moment';

// Make a component
class HistoryReceiveMoreCardOther extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hisrecmorecardothers: [],
    };
  }

  render() {
    const { container, top, down, nunstyle, contstyle, timestyle, butistyle, nuntext, conttext, timetext } = styles;
    const { params } = this.props.navigation.state;
    return (
      <View style={container}>
        {this.renderOther()}
      </View>
    );
  }

  renderOther() {
    const { container, top, down, nunstyle, contstyle, timestyle, butistyle, nuntext, conttext, timetext } = styles;
    const { params } = this.props.navigation.state;
    return (
      <View>
        <View style={top}>
          <View style={nunstyle}>
            <Text style={nuntext}>U</Text>
          </View>
          <View style={contstyle}>
            <Text style={conttext}>{params.data.boatContent}</Text>
          </View>
        </View>
        {/*上方結束         */}
        <View style={down}>
          <View style={timestyle}>
            <Text style={timetext}>
              台灣 / 台中市     >>  {moment(params.data.receiveTime).format('YYYY/MM/DD     hh:mm')}
            </Text>
          </View>
          <View style={butistyle}>
            <TouchableOpacity onPress={() => this.reportReply()}>
              <Image

                source={require('../../../../../assets/dgrReport.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/*下方結束        */}
      </View>
    )
  }

  reportReply() {
    Alert.alert("檢舉", "確定要檢舉嗎？", [{ text: '確定', onPress: () => Alert.alert('提示', '已檢舉此回覆') }, { text: '取消', style: 'cancel' }])
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
  top: {
    flexDirection: 'row',
    width: 290,
    paddingRight: 30,
    // alignItems:'center',
  },
  down: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',

  },
  nunstyle: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d8d8d8',
    width: 30,
    height: 30,
    borderStyle: 'solid',
    borderRadius: 16,
    paddingBottom: 2,
  },
  contstyle: {
    paddingLeft: 20,
  },
  timestyle: {

  },
  butistyle: {
    marginLeft: 42,
  },
  nuntext: {
    fontSize: 18,
    color: '#595959',
  },
  conttext: {
    fontSize: 14,
    lineHeight: 24,
    color: '#595959',
  },
  timetext: {
    fontSize: 12,
    color: '#9f9f9f',
  },
})
export default HistoryReceiveMoreCardOther;
