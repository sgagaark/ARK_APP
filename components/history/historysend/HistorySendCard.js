import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  ListView
} from 'react-native';

import { Tile, List, ListItem } from 'react-native-elements';
import axios from 'axios';
import HistoryBoatList from './SendBoatList';
// Make a component
class HistorySendCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      isLoading: true
    };
  }


  render() {
    if (this.state.isLoading) {
      return (
        <View>
        </View>
      );
    }
    return (
      <View>
        {this.renderBoats()}
      </View>
    )
  }

  renderBoats() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <HistoryBoatList {...rowData}{...this.props} />}
      />
    )
  }

  componentDidMount() {
    this.getUserBoat();
  }

  getUserBoat() {
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    axios('/GetUserBoat', {
      method: 'post',
      baseURL: 'http://www.rongserver.com/ark/api/',
      data: {
        id: 0,//後續要改
      }
    })
      .then((response) => {
        if (response.data['status']) {
          //Alert.alert("收到資料");
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


const styles = StyleSheet.create({
  bgcolor: {
    height: 120,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: "solid",
    borderBottomWidth: 1,
    borderColor: "#dfdfdf",
  },
  titletext: {
    fontSize: 18,
    color: '#595959',
  },
  context: {
    fontSize: 14,
    color: '#696969',
  },
  timetext: {
    fontSize: 12,
    color: '#9f9f9f',
  },
  imgstyle: {
    marginRight: 33,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderStyle: 'solid',
    borderRadius: 37.5,
    paddingBottom: 2,
    shadowColor: '#dddddd',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    shadowOpacity: 1
  },
  contstyle: {
    marginTop: 8,
    marginBottom: 19,
  },
  redpoint: {
    width: 10,
    height: 10,
    backgroundColor: '#e4007f',
    borderColor: '#e4007f',
    borderStyle: 'solid',
    borderRadius: 5.4,
  },
  redpointstyle: {
    marginRight: 10,
  }
})

export default HistorySendCard;
