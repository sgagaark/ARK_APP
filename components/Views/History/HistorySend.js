//歷史紀錄之送船
//歷史紀錄之收船
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, ListView, Alert } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import SegmentedControl from 'react-native-segmented-control';
import SelectedBoat from '../Shared/SelectedBoat';
import ReplyMessageCell from '../Shared/ReplyMessageCell';
import JourneyView from './JourneyView';
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
        const { container, SelectedBoatCenter,JourneyViewFlex1,ReplyMessageCellStyle } = styles
        return (
            <View style={container}>
                <SegmentedControl
                    defaultPage={0}
                    itemFontSize={17}
                    itemButtonColor='#fefefe'
                    itemButtonActiveColor='#fefefe'
                    itemTextColor='#9f9f9f'
                    itemTextActiveColor='#42758c'
                    itemButtonBorderColor='#fefefe'
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
                        <View style={SelectedBoatCenter}>
                            <ScrollView>
                                <SelectedBoat data={this.props.navigation.state.params.data} />
                                <View style={ReplyMessageCellStyle}>
                                    <ReplyMessageCell data={this.props.navigation.state.params.data} />
                                </View>
                            </ScrollView>
                        </View>
                    </SegmentedControl.Item>
                    <SegmentedControl.Item
                        title={'送出的訊息'}
                    >
                        <View style={JourneyViewFlex1}>
                            <ScrollView>
                                {/*抓旅程的頁面*/}
                                <JourneyView />
                            </ScrollView>
                        </View>
                    </SegmentedControl.Item>
                </SegmentedControl>
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
        // alignItems: 'center',
        flex: 1,
        backgroundColor: '#fefefe',
    },
    SelectedBoatCenter: {
        alignItems: 'center',
        flex: 1,
    },
    JourneyViewFlex1:{
        flex: 1,
        backgroundColor:'#56abc8',
    },
    ReplyMessageCellStyle:{
        marginTop:30,
    },
})
export default HistorySend;
