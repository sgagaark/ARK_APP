import React, { Component } from 'react';
import { ScrollView,View,Text } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';


// Make a component
class Logout extends Component {
  state = { logout: [] };


  render() {
    return (
      <View>
        <Text>Logout</Text>
      </View>
    );
  }
}

export default Logout;
