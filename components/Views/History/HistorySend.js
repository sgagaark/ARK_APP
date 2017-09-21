//歷史紀錄之送船
//歷史紀錄之收船
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, ListView, Alert } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import SelectedBoat from '../Shared/SelectedBoat';
import ReplyMessageCell from '../Shared/ReplyMessageCell';
import ReplyInput from '../Shared/ReplyInput';
import axios from 'axios';
// 這頁是抓取HisSendcard的內容
// Make a component
class HistorySend extends Component {
    state = {
        data: [],
        noReply: true,
        isLoading: true,
    };



    render() {
        const { container } = styles

        if (this.state.isLoading) {
            return (
                <View />
            )
        }
        if (this.state.noReply) {
            return (
                <View style={container}>
                    <SelectedBoat data={this.props.navigation.state.params.data} />
                    <View>
                        {/*<ReplyMessageCell data={this.props.navigation.state.params.data} />*/}
                        <Text >{'沒有回覆哭哭喔'}</Text >
                    </View>
                </View>
            )
        }
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(this.state.data);
        return (
            <View style={container}>
                <SelectedBoat data={this.props.navigation.state.params.data} />
                <View>
                    {/*<ReplyMessageCell data={this.props.navigation.state.params.data} />*/}
                    <ListView
                        dataSource={this.dataSource}
                        renderRow={(rowData) => <ReplyMessageCell {...rowData} />
                        }
                    />
                </View>
            </View>
        );
    }



    componentDidMount() {
        this.getReplyBoatByBoatId();
        console.log(this.state);
    }

    getReplyBoatByBoatId() {
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        axios('/GetReplyBoatByBoatId', {
            method: 'post',
            baseURL: Server('fulluri'),
            data: {
                boatId: this.props.navigation.state.params.data.boatId
            }
        })
            .then((response) => {
                if (response.data['status']) {
                    this.setState({
                        isLoading: false,
                        noReply: false,
                        data: response.data['data'],
                    });
                    if (!response.data['data'].length) {
                        this.setState({
                            noReply: true,
                        });
                    }
                } else {
                    Alert.alert('錯誤', '與伺服器連線異常');
                }
            }).catch((err) => {
                console.log(err);
            })

    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fefefe',
    },
})
export default HistorySend;
