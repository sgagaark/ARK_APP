//歷史紀錄主畫面
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, ListView } from 'react-native';
import SegmentedControl from 'react-native-segmented-control';
import { connect } from 'react-redux';
import HistoryRecive from './HistoryReceive';
import HistorySend from './HistorySend';
import MessageCell from './MessageCell';
import axios from 'axios';

import { setReplyBoats, setUserSendBoats } from '../../actions';

// import HistoryReceiveMore from './historyreceive/receivemore/HistoryReceiveMore';
// import HistorySendMoreScreen from './historysend/sendmore/HistorySendMoreScreen';
class HistoryView extends Component {
    state = {
        sendIsCompelete: false,
        receiveIsCompelete: false
    }
    render() {
        if (!(this.state.sendIsCompelete && this.state.receiveIsCompelete)) {
            return (
                <View />
            )
        }
        const { bgcolor, header, headertext, ScrollViewstyle, semgstyle } = styles;
        return (
            <View style={bgcolor}>
                <View style={semgstyle}>
                    <SegmentedControl
                        defaultPage={0}
                        itemFontSize={17}
                        itemButtonColor='#f9f9f9'
                        itemButtonActiveColor='#f9f9f9'
                        itemTextColor='#9f9f9f'
                        itemTextActiveColor='#42758c'
                        itemButtonBorderColor='#f9f9f9'
                        itemButtonViewStyle={{

                            //paddingBottom:10,
                        }}
                        itemHeaderViewStyle={{
                            paddingVertical: 0,
                            height: 44,
                            borderBottomWidth: 1,
                            borderColor: "#dfdfdf",
                            justifyContent: 'center',

                        }}
                        ref={e => this.SegmentedControl = e}
                    >
                        <SegmentedControl.Item
                            title={'收到的船'}
                        >
                            <ScrollView style={ScrollViewstyle}>
                                {/*收到的船抓的頁面  要加listView*/}
                                {this.renderReceiveBoats()}
                                {/*<MessageCell type={'receive'}  {...this.props} />*/}
                            </ScrollView>
                        </SegmentedControl.Item>
                        <SegmentedControl.Item
                            title={'送出的訊息'}
                        >
                            <ScrollView style={ScrollViewstyle}>
                                {/*送出的船抓的頁面  要加listView*/}
                                {this.renderSendBoats()}
                            </ScrollView>
                        </SegmentedControl.Item>
                    </SegmentedControl>
                </View>
            </View>
        );
    }

    renderReceiveBoats() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.receiveDataSource = ds.cloneWithRows(this.props.UserReplyBoats.data);
        return (
            <ListView
                dataSource={this.receiveDataSource}
                renderRow={(rowData) => <MessageCell type={'receive'} {...rowData} {...this.props.navigation} />
                }
            />
        )
    }
    renderSendBoats() {
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.sendDataSource = ds.cloneWithRows(this.props.UserSendBoats.data);
        return (
            <ListView
                dataSource={this.sendDataSource}
                renderRow={(rowData) => <MessageCell type={'send'} {...rowData} {...this.props.navigation} />
                }
            />
        )
    }

    componentDidMount() {
        this.getReplyBoats();
        this.getSendBoats();
    }

    getSendBoats() {
        const { dispatch, navigation } = this.props;
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        axios('/GetUserBoat', {
            method: 'post',
            baseURL: Server('fulluri'),
            data: {
                id: 0,//後續要改
            }
        })
            .then((response) => {
                if (response.data['status']) {
                    dispatch(setUserSendBoats(response.data['data']));
                    this.setState({ sendIsCompelete: true });
                } else {
                    Alert.alert('錯誤', '與伺服器連線異常');
                }
            }).catch((err) => {
                console.log(err);
            })


    }

    getReplyBoats() {
        const { dispatch, navigation } = this.props;
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        axios('/GetReplyBoatByUserId', {
            method: 'post',
            baseURL: Server('fulluri'),
            data: {
                id: 0,//後續要改
            }
        })
            .then((response) => {

                if (response.data['status']) {
                    dispatch(setReplyBoats(response.data['data']));
                    this.setState({ receiveIsCompelete: true });
                } else {
                    Alert.alert('錯誤', '與伺服器連線異常');
                }
            }).catch((err) => {
                console.log(err);
            })


    }


}

const styles = StyleSheet.create({
    bgcolor: {
        backgroundColor: '#f9f9f9',
        flex: 1,
    },
    header: {
        backgroundColor: "#68accb",
        justifyContent: 'center',
        alignItems: 'center',
        height: 64,
        paddingTop: 15,
    },
    headertext: {
        fontSize: 17,
        textAlign: "left",
        color: "#ffffff",
    },
    ScrollViewstyle: {

    },
    semgstyle: {
        flex: 1,
    },
})

const mapStateToProps = state => {
    return {
        UserReplyBoats: state.UserReplyBoats,
        UserSendBoats: state.UserSendBoats,
    }
}

export default connect(mapStateToProps)(HistoryView);
