//共用  選中的船（Title）
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, } from 'react-native';
import moment from 'moment';

class SelectedBoat extends Component {

    render() {
        const { data } = this.props;
        const { container, top, down, titletext, conttext, timetext, imgstyle, maptext, maptimestyle, mapstyle, titlstyle, contstyle } = styles;
        //const { params } = this.props.navigation.state;
        return (
            <View style={container}>
                <View>
                    <View style={top}>
                        <View style={imgstyle}>
                            <Image source={require('../../../assets/send/bboat.png')} />
                        </View>
                        <View style={maptimestyle}>
                            <View style={mapstyle}>
                                {/*地點*/}
                                <Text style={maptext}>台灣 / 台中市</Text>
                            </View>
                            <View>
                                {/*時間*/}
                                {/* <Text style={timetext}>>>  2017/09/11</Text> */}
                                <Text style={timetext}>>>  {moment(data.createTime).format('YYYY/MM/DD     hh:mm')}</Text>
                            </View>
                        </View>
                    </View>
                    {/*上方結束*/}
                    <View style={down}>
                        <View style={titlstyle}>
                            {/*主題         */}
                            <Text style={titletext}>{data.boatTitle}</Text>
                        </View>
                        <View style={contstyle}>
                            {/*內文*/}
                            <Text style={conttext}>{data.boatContent}</Text>
                        </View>
                    </View>
                    {/*下方結束        */}
                </View>
            </View>
        );
    }

    componentDidMount() {
        console.log(this.props.data);
    }
}
const styles = StyleSheet.create({
    container: {
        // borderStyle: "solid",
        // borderBottomWidth : 1,
        // borderColor:"#dfdfdf",
        marginTop: 30,
        alignItems: 'center',
    },
    top: {
        flexDirection: 'row',
        marginBottom: 36,
    },
    maptimestyle: {
        justifyContent: 'center',
    },
    down: {
        width: 290,
    },
    mapstyle: {
        marginBottom: 5,
    },
    titlstyle: {
        marginBottom: 25,
    },
    contstyle: {
        marginBottom: 22,

    },
    titletext: {
        fontSize: 18,
        color: '#595959',
    },
    conttext: {
        fontSize: 14,
        color: '#595959',
        lineHeight: 20,
    },
    maptext: {
        fontSize: 12,
        color: '#9f9f9f',
    },
    timetext: {
        fontSize: 12,
        color: '#9f9f9f',
    },
    imgstyle: {
        marginRight: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 70,
        borderStyle: 'solid',
        borderRadius: 37.5,
        paddingBottom: 2,
        shadowColor: '#dddddd',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 3,
        shadowOpacity: 1
    },
})
export default SelectedBoat;
