import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import axios from 'axios';

import ReceiveReplyCardMain from './ReceiveReplyCard/ReceiveReplyCardMain';
import ReceiveReplyCardOther from './ReceiveReplyCard/ReceiveReplyCardOther';
import ReceiveReplyCardInput from './ReceiveReplyCard/ReceiveReplyCardInput';
// Make a component
class ReceiveReply extends Component {
  constructor(props) {
    super(props);
    this.state = { hissendmore: [] };
  }

  render() {
    const { bgcolor, } = styles;
    return (
      <ScrollView style={bgcolor}>
        <View>
          <ReceiveReplyCardMain {...this.props} />
        </View>
        {/*回復過出現*/}
        <View>
          {/*<ReceiveReplyCardOther />*/}
        </View>
        {/*沒回覆過出現*/}
        <View>
          {<ReceiveReplyCardInput {...this.props}/>}
        </View>
      </ScrollView>

    );
  }
}
const styles = StyleSheet.create({
  bgcolor: {
    // justifyContent:'center',
    // alignItems:'center',
  }
})
export default ReceiveReply;
