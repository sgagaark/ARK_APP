import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, ListView } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import axios from 'axios';

import HistorySendMoreCardMain from './HistorySendMoreCard/HistorySendMoreCardMain';
import HistorySendMoreCardOther from './HistorySendMoreCard/HistorySendMoreCardOther';
// Make a component
class HistorySendMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hissendmore: [],
      ReplyIsLoading: true,
    };
  }


  render() {
    const { bgcolor, } = styles;
    return (
      <View style={bgcolor}>
        <View>
          <HistorySendMoreCardMain {...this.props} />
        </View>
        {this.renderOther()}
      </View>
    );
  }


  //for HistorySendMoreCardOther
  renderOther() {
    if (this.state.ReplyIsLoading) {
      return (
        <View />
      )
    }
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <HistorySendMoreCardOther {...rowData}/>}
        />
      </View>
    )
  }

  componentDidMount() {
    this.getReplyBoatByBoatId();
  }

  getReplyBoatByBoatId() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    axios('/GetReplyBoatByBoatId', {
      method: 'post',
      baseURL: 'http://www.rongserver.com/ark/api/',
      data: {
        //boatId: this.props.navigation.state.params.data.boatId
      }
    })
      .then((response) => {
        if (response.data['status']) {
          const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
          this.setState({
            ReplyIsLoading: false,
            dataSource: ds.cloneWithRows(response.data['data'])
          });
        } else {
          Alert.alert('錯誤', '與伺服器連線異常');
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
export default HistorySendMore;
