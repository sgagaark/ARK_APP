//送出新的一艘船畫面
import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, } from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';

// Make a component
class Send extends Component {

    render() {
        const { container,alignItemsCenter, bgimgin, Boatcount, BoatcountFront, BoatcountEnd, BoatcountRow,
            titleText, FrontText, countText, unitText } = styles;
        return (
            <View style={container}>
                <View>
                    <Image source={require('../../../assets/boatcount/bgSkySea.png')}
                        style={bgimgin}
                    >
                    </Image>
                </View>
                <View style={alignItemsCenter}>
                    <View>
                        <Text style={titleText}>紙船統計</Text>
                    </View>
                    <View>
                        {/* <Text>fgjofjgiof</Text> */}
                    </View>
                    <View style={Boatcount}>
                        <View style={BoatcountFront}>
                            <Text style={FrontText}>海上的紙船：</Text>
                        </View>
                        <View style={BoatcountEnd}>
                            <View style={BoatcountRow}>
                                <Text style={countText}>1104</Text>
                                <Text style={unitText}>艘</Text>
                            </View>
                        </View>
                        <View style={BoatcountFront}>
                            <Text style={FrontText}>你送出的紙船：</Text>
                        </View>
                        <View style={BoatcountEnd}>
                            <View style={BoatcountRow}>
                                <Text style={countText}>40</Text>
                                <Text style={unitText}>艘</Text>
                            </View>
                        </View>
                        <View style={BoatcountFront}>
                            <Text style={FrontText}>你打開的紙船：</Text>
                        </View>
                        <View style={BoatcountEnd}>
                            <View style={BoatcountRow}>
                                <Text style={countText}>105</Text>
                                <Text style={unitText}>艘</Text>
                            </View>
                        </View>
                    </View>
                    {/* Boatcount */}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'rgba(0,0,0,0)',
    },
    alignItemsCenter:{
        alignItems: 'center',
        paddingTop:50,
    },
    bgimgin: {
        flex: 1,
        resizeMode: 'cover',
        position: 'absolute',
        zIndex: 0,
    },
    Boatcount: {
        width: 220,
    },
    BoatcountFront: {
        alignItems: 'flex-start',
        marginTop: 37,
    },
    BoatcountEnd: {
        alignItems: 'flex-end',
        marginTop: 20,
    },
    BoatcountRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 24,
        color: '#ffffff',
        textShadowColor: 'gray',
        textShadowOffset: {
            width: 0,
            height: 1
        },
        textShadowRadius: 2
    },
    FrontText: {
        fontSize: 14,
        color: '#ffffff',
    },
    countText: {
        width: 150,
        textAlign: 'center',
        fontSize: 36,
        color: '#ffffff',
    },
    unitText: {
        fontSize: 20,
        color: '#ffffff',

    },
})

export default Send;
