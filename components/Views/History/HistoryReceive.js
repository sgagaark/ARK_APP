//歷史紀錄之收船
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import SelectedBoat from '../Shared/SelectedBoat';
import ReplyMessageCell from '../Shared/ReplyMessageCell';

// 這頁是抓取HisSendcard的內容
// Make a component
class HistoryReceive extends Component {
    state = {
        noReply: false,
    };

    render() {
        const { container } = styles;
        if (this.state.noReply) {
            return (
                <View style={container}>
                    <SelectedBoat data={this.props.navigation.state.params.data} />
                    <View>
                        <ReplyInput />
                    </View>
                </View>
            )
        }
        return (
            <View style={container}>
                <ScrollView>
                <SelectedBoat data={this.props.navigation.state.params.data} />
                <View>
                    <ReplyMessageCell {...this.props.navigation.state.params.data} />
                </View>
                </ScrollView>
            </View>
        );
    }

    componentDidMount() {
        //console.log(this.props.navigation.state.params);
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fefefe',
        flex: 1,
    },
})
export default HistoryReceive;
