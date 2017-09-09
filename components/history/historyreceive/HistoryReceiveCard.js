import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'
import { View, ListView, } from 'react-native';
// import { Tile, List, ListItem } from 'react-native-elements';
import axios from 'axios';
import ReceiveBoatComponent from './ReceiveBoatComponent';


// Make a component
class HistoryReceiveCard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     history: [],
  //     isLoading: true,
  //   };
  // }

  render() {
    if (!this.props.ReplyBoat.isCompelete) {
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
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows(this.props.ReplyBoat.Boats)
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={(rowData) => <ReceiveBoatComponent {...rowData} {...this.props.ReplyBoat.Boats} />
        }
      />
    )
  }

  componentDidMount() {
    this.getReplyBoat();
  }

  getReplyBoat() {
    const { dispatch } = this.props;
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    axios('/GetReplyBoatByUserId', {
      method: 'post',
      baseURL: 'http://www.rongserver.com/ark/api/',
      data: {
        id: 0,//後續要改
      }
    })
      .then((response) => {

        if (response.data['status']) {

          // this.props.setMyReplyBoat(response.data['data']);
          // const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
          // dataSource = ds.cloneWithRows(response.data['data'])
          this.props.setReplyBoat(response.data['data']);
        } else {
          //Alert.alert('錯誤', '與伺服器連線異常');
        }
      }).catch((err) => {
        console.log(err);
      })


  }
}

const mapStateToProps = state => {
  return {
    ReplyBoat: state.ReplyBoat
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setReplyBoat: (data) => {
      dispatch(setReplyBoat(data))
    }
  }
}

export default connect(mapStateToProps, actions)(HistoryReceiveCard);
