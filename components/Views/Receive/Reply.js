//收船後點擊船進入的回船畫面
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
//import { Tile, List, ListItem } from 'react-native-elements';
import axios from 'axios';

// import ReceiveReplyCardMain from './ReceiveReplyCard/ReceiveReplyCardMain';
// import ReceiveReplyCardOther from './ReceiveReplyCard/ReceiveReplyCardOther';
// import ReceiveReplyCardInput from './ReceiveReplyCard/ReceiveReplyCardInput';

import SelectedBoat from '../Shared/SelectedBoat';
import ReplyInput from '../Shared/ReplyInput';
import ReplyMessageCell from '../Shared/ReplyMessageCell';
// Make a component
class ReceiveReply extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { hissendmore: [] };
    // }

    render() {
        const { data } = this.props.navigation.state.params;
        const { bgcolor, } = styles;
        return (
            <ScrollView style={bgcolor}>
                <View>
                    <SelectedBoat data={data} {...this.props.data} />
                </View>
                {/* <View>
                    <ReplyMessageCell {...this.props} />
                </View> */}
                <View>
                    <ReplyInput data={data} {...this.props.data} />
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
