//送出船的經歷
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import JourneyCell from './JourneyCell';


// Make a component
class JourneyView extends Component {
    constructor(props) {
        super(props);
        this.state = { JourneyView: [] };
    }

    render() {
        const { container, headerstyle,headerstyleB,headerstyleC, conststyle, Roundin, Roundout, headerBGC,
            Roundwidth, leftspace, rightspace, textstyle, titletext, whiteline, whitelineWidth, whitelineB } = styles;
        return (

            <View style={container}>
                <ScrollView style={container}>
                    <View style={headerBGC}>
                        <View style={headerstyle}>
                            {/* 左方調整匡 */}
                            <View style={leftspace}></View>
                            <View style={Roundwidth}>
                                <View style={Roundout}>
                                    <View style={Roundin}>
                                        <Image source={require('../../../assets/send/bboat.png')} />
                                    </View>
                                </View>
                            </View>
                            {/*圖片結束*/}
                            <View style={textstyle}>
                                <View>
                                    <Text style={titletext}>台灣 / 台北市</Text>
                                </View>
                                <View>
                                    <Text style={titletext}>2017/07/17   21:43</Text>
                                </View>
                            </View>
                        </View>
                        {/*下面的槓槓*/}
                        <View style={headerstyle}>
                            {/* 左方調整匡 */}
                            <View style={leftspace}></View>
                            <View style={whitelineWidth}><View style={whiteline}></View></View>
                            {/* 右方調整匡 */}
                            <View style={rightspace}></View>
                        </View>
                    </View>
                    {/* JourneyCell */}
                    <View style={headerstyleB}>
                        <JourneyCell />
                        {/* <JourneyCell />
                        <JourneyCell />
                        <JourneyCell />
                        <JourneyCell />
                        <JourneyCell />
                        <JourneyCell />
                        <JourneyCell />
                        <JourneyCell />
                        <JourneyCell />
                        <JourneyCell />
                        <JourneyCell />
                        <JourneyCell />
                        <JourneyCell />
                        <JourneyCell />
                        <JourneyCell /> */}
                    </View>
                    {/* 最下面的槓槓 */}
                    <View style={headerstyleC}>
                        {/* 左方調整匡 */}
                        <View style={leftspace}></View>
                        <View style={whitelineWidth}>
                            <View style={whitelineB}></View>
                            <View style={whitelineB}></View>
                            <View style={whitelineB}></View>
                            <View style={whitelineB}></View>
                            <View style={whitelineB}></View>
                        </View>
                        {/* 右方調整匡 */}
                        <View style={rightspace}></View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#56abc8',
        // alignItems: 'center',
        flex: 1,
    },
    headerBGC: {
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#106085',
        paddingTop: 40,
    },
    leftspace: {
        width: 70,
        height: 20,
    },
    rightspace: {
        width: 100,
        marginLeft: 12,
        height: 20,
    },
    headerstyle: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    headerstyleB:{
        alignItems: 'center',
    },
    headerstyleC:{
        justifyContent:'center',
        flexDirection: 'row',
    },
    Roundwidth: {
        width: 60,
    },
    Roundin: {
        backgroundColor: '#fefefe',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderStyle: 'solid',
        borderRadius: 26.8,
        paddingBottom: 2,
    },
    Roundout: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: '#fefefe',
        borderStyle: 'solid',
        borderRadius: 32.2,
    },
    conststyle: {
        backgroundColor: '#56abc8',
        flex: 1,
    },
    textstyle: {
        width: 100,
        marginLeft: 12,
    },
    titletext: {
        fontSize: 14,
        color: '#fefefe',
    },
    whitelineWidth: {
        width: 60,
        alignItems: 'center',
    },
    whiteline: {
        width: 3,
        height: 22,
        backgroundColor: '#fefefe',
    },
    whitelineB: {
        width: 3,
        height: 10,
        backgroundColor: '#fefefe',
        marginTop: 5,
    }
})
export default JourneyView;
