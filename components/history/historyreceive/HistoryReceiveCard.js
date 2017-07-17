import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, ListView, Alert, TouchableHighlight } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import axios from 'axios';
import BoatList from '../BoatList';


// Make a component
class HistoryReceiveCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      isLoading: true,
    };
  }


  render() {
    if (this.state.isLoading) {
      return (
        <View>
        </View>
      )
    }
    return (
      <View>
        {this.renderBoats()}
      </View>

    );
  }
  renderBoats() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <BoatList {...rowData} {...this.props} />
        }

      />
    )
  }

  componentDidMount() {
    this.getReplyBoat();
  }

  getReplyBoat() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    axios('/GetReplyBoat', {
      method: 'post',
      baseURL: 'http://www.rongserver.com/ark/api/',
      data: {
        id: 0,//後續要改
      }
    })
      .then((response) => {

        if (response.data['status']) {
          Alert.alert("收到資料");
          const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
          this.setState({
            isLoading: false,
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
export default HistoryReceiveCard;
