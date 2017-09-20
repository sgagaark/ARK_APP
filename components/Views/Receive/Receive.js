//收船首頁
import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import BoatIcon from './BoatIcon';
import { connect } from 'react-redux';
import Server from '../../Server';
import axios from 'axios';
import Loading from '../Shared/Loading';
import { setAroundBoats } from '../../actions'

// Make a component
class Receive extends Component {
  state = {
    receive: [],
    isLoading: true,
    hasData: false,
  };



  render() {
    const { bgimgall, bgimg, bgimgin, botimg1, botimg2, botimg3, botimg4, botimg5 } = styles;
    if (!this.state.hasData) {
      return (
        <Loading />
      )
    }
    return (
      <View style={bgimgall}>
        <View style={bgimg}>
          <Image source={require('../../../assets/receive/bgSea.png')}
            style={bgimgin}
          >
          </Image>
        </View>
        <View style={botimg1}>
          <BoatIcon data={this.props.AroundBoats.data[0]} {...this.props} />
        </View>
        {/* <View style={botimg2}>
          <BoatIcon {...this.props} />
        </View>
        <View style={botimg3}>
          <BoatIcon {...this.props} />
        </View>
        <View style={botimg4}>
          <BoatIcon {...this.props} />
        </View>
        <View style={botimg5}>
          <BoatIcon {...this.props} />
        </View> */}
      </View>
    );
  }

  componentDidMount() {
    this.checkLogin();
    //this.getAroundBoat();
  }

  componentWillReceiveProps() {
    this.getAroundBoat();
  }

  checkLogin() {
    if (!this.props.UserInfo.isLogin) {
      this.props.navigation.navigate('LoginNavigator');
    }
  }

  getAroundBoat() {
    setTimeout(() => {
      //如果已經有資料
      if (this.state.hasData)
        return;
      //如果沒登入或還在load資料
      if (!this.props.UserInfo.isLogin && !this.state.isLoading) {
        console.log('NotLogin');
        this.getAroundBoat();
        return;
      }
      this.setState({ isLoading: false });
      console.log('getAroundBoat');
      const { dispatch } = this.props;
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      navigator.geolocation.getCurrentPosition((pos) => {
        this.state.userlatitude = pos.coords.latitude;
        this.state.userlongitude = pos.coords.longitude;

        axios('/GetAroundBoat', {
          method: 'post',
          baseURL: Server('fulluri'),
          data: {
            boatLatitude: this.state.userlatitude,
            boatLongitude: this.state.userlongitude,
          }
        })
          .then((response) => {
            if (response.data['status']) {
              dispatch(setAroundBoats(response.data['data']));
              this.setState({ hasData: true });
            } else {
              console.log('Fail');
            }
          }).catch((err) => {
            console.log(err);
          })

      }, (error) => {
        console.log(error);
      }, options)


    }, 1000);
  }
}

const styles = StyleSheet.create({
  bgimgall: {
    flex: 1,

    backgroundColor: '#68accb',
    justifyContent: 'center',
    alignItems: 'center',
    //alignItems:'stretch',
  },
  bgimg: {
    //position: 'absolute',
    //zIndex: 0,
  },
  bgimgin: {
    flex: 1,
    resizeMode: 'cover',
  },
  botimg1: {
    position: 'absolute',
    zIndex: 1,
    top: 327,
    left: 45,
    backgroundColor: 'transparent',
  },
  botimg2: {
    position: 'absolute',
    zIndex: 1,
    top: 434,
    left: 45,
    backgroundColor: 'transparent',
  },
  botimg3: {
    position: 'absolute',
    zIndex: 1,
    top: 379,
    left: 125,
    backgroundColor: 'transparent',
  },
  botimg4: {
    position: 'absolute',
    zIndex: 1,
    top: 350,
    left: 265,
    backgroundColor: 'transparent',
  },
  botimg5: {
    position: 'absolute',
    zIndex: 1,
    top: 481,
    left: 235,
    backgroundColor: 'transparent',
  },
})

const mapStateToProps = state => {
  return {
    UserInfo: state.UserInfo,
    AroundBoats: state.AroundBoats,
  }
}

export default connect(mapStateToProps)(Receive);
