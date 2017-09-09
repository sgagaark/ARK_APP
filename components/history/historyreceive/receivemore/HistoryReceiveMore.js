import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, ListView, Alert } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import axios from 'axios';
import { connect } from 'react-redux';
import { setSelectedReplyBoat } from '../../../actions'

import HistoryReceiveMoreCardMain from './HistoryReceiveMoreCard/HistoryReceiveMoreCardMain';
import HistoryReceiveMoreCardOther from './HistoryReceiveMoreCard/HistoryReceiveMoreCardOther';
import HistoryReceiveMoreCardInput from './HistoryReceiveMoreCard/HistoryReceiveMoreCardInput';
// Make a component
class HistoryReceiveMore extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     hissendmore: [],
  //     isLoading: true,
  //   };
  // }
  render() {
    const { bgcolor, } = styles;
    if (!this.props.ReplyBoat.isCompelete) {
      return (
        <View />
      )
    }
    return (
      <View style={bgcolor}>
        {this.renderOther()}
        <View>
          <HistoryReceiveMoreCardOther {...this.props.ReplyBoat} />
        </View>
      </View>
    );
  }


  //for HistorySendMoreCardOther
  renderOther() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows(this.props.ReplyBoat.Boat);
    return (
      <View>
        <ListView
          dataSource={this.dataSource}
          renderRow={(rowData) => <HistoryReceiveMoreCardMain {...rowData} />}
        />
      </View>
    )
  }

  componentDidMount() {
    // const { params } = this.props.navigation.state;
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    axios('/GetUserBoatByBoatId', {
      method: 'post',
      baseURL: 'http://www.rongserver.com/ark/api/',
      data: {
        boatId: 59,
        //boatId: params.data.boatId,
      }
    })
      .then((response) => {
        if (response.data['status']) {


          this.props.setSelectedReplyBoat(response.data['data']);
          // this.setState({
          //   isLoading: false,
          //   dataSource: ds.cloneWithRows(response.data['data'])
          // })
        } else {
          console.log('Fail');
        }
      }).catch((err) => {
        console.log(err);
      })
  }

}
const styles = StyleSheet.create({
  bgcolor: {
    // justifyContent:'center',
    // alignItems:'center',
  }
})

const mapStateToProps = state => {
  return {
    ReplyBoat: state.SelectedReplyBoat
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedReplyBoat: (data) => {
      dispatch(setSelectedReplyBoat(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryReceiveMore);
