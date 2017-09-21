//歷史紀錄之收船
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import SelectedBoat from '../Shared/SelectedBoat';
import ReplyMessageCell from '../Shared/ReplyMessageCell';

// 這頁是抓取HisSendcard的內容
// Make a component
class HistoryReceive extends Component {
    state = { historyrecive: [] };

    render() {
        return (
            <View>
                <SelectedBoat data={this.props.navigation.state.params.data} />
                <View>
                    <ReplyMessageCell data={this.props.navigation.state.params.data} />
                </View>
            </View>
        );
    }

    componentDidMount() {
        console.log(this.props.navigation.state.params);
    }
}

export default HistoryReceive;
