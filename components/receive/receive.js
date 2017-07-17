import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
//import SvgUri from 'react-native-svg-uri';
import Receiveboat from './receiveboat';
import axios from 'axios';

// Make a component
class Receive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      receive: [],
      isLoading: true
    };
  }


  render() {
    const { bgimg, botimg1, botimg2, botimg3, botimg4, botimg5 } = styles;
    if (this.state.isLoading) {
      return (
        <View />
      )
    }
    return (
      <View>
        <View style={bgimg}>
          <Image source={require('../../assets/receive/bgSea.png')}>
          </Image>
        </View>
        <View style={botimg1}>
          <Receiveboat data={this.state.data[0]}{...this.props} />
        </View>
        <View style={botimg2}>
          <Receiveboat data={this.state.data[1]} {...this.props} />
        </View>
        <View style={botimg3}>
          <Receiveboat data={this.state.data[2]} {...this.props} />
        </View>
        <View style={botimg4}>
          <Receiveboat data={this.state.data[3]} {...this.props} />
        </View>
        <View style={botimg5}>
          <Receiveboat data={this.state.data[4]} {...this.props} />
        </View>
      </View>
    );
  }
  componentDidMount() {
    this.getAroundBoat();
  }
  getAroundBoat() {
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
        baseURL: 'http://www.rongserver.com/ark/api/',
        data: {
          boatLatitude: this.state.userlatitude,
          boatLongitude: this.state.userlongitude,
        }
      })
        .then((response) => {
          if (response.data['status']) {
            this.setState({
              isLoading: false,
              data: response.data['data']
            })
          } else {
            console.log('Fail');
          }
        }).catch((err) => {
          console.log(err);
        })

    }, (error) => {
      console.log(error);
    }, options)


  }
}

const styles = StyleSheet.create({
  bgimg: {
    position: 'absolute',
    zIndex: 0,
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
export default Receive;
