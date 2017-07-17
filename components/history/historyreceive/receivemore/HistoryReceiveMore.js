import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image, ListView ,Alert} from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import axios from 'axios';

import HistoryReceiveMoreCardMain from './HistoryReceiveMoreCard/HistoryReceiveMoreCardMain';
import HistoryReceiveMoreCardOther from './HistoryReceiveMoreCard/HistoryReceiveMoreCardOther';
import HistoryReceiveMoreCardInput from './HistoryReceiveMoreCard/HistoryReceiveMoreCardInput';
// Make a component
class HistoryReceiveMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hissendmore: [],
      isLoading: true,
    };
  }
  render() {
    const { bgcolor, } = styles;
    if (this.state.isLoading) {
      return (
        <View />
      )
    }
    return (
      <View style={bgcolor}>
        {this.renderOther()}
        <View>
          <HistoryReceiveMoreCardOther {...this.props} />
        </View>
      </View>
    );
  }


  //for HistorySendMoreCardOther
  renderOther() {
    return (
      <View>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <HistoryReceiveMoreCardMain {...rowData} />}
        />
      </View>
    )
  }

  componentDidMount() {
    const { params } = this.props.navigation.state;
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    axios('/GetUserBoatByBoatId', {
      method: 'post',
      baseURL: 'http://www.rongserver.com/ark/api/',
      data: {
        boatId: params.data.boatId,
      }
    })
      .then((response) => {
        if (response.data['status']) {
          
          const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
          Alert.alert('124');
          this.setState({
            isLoading: false,
            dataSource: ds.cloneWithRows(response.data['data'])
          })
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
export default HistoryReceiveMore;
