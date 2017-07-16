import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    View,
    Text,
    Image,
    Alert,
    ListView,
    Geolocation,
} from 'react-native';
import moment from 'moment';

export const Boat = (props) => {
    const { bgcolor, titletext, context, timetext, imgstyle, contstyle, redpoint, redpointstyle } = styles;

    return (
        <View style={bgcolor}>
            <NewReply {...props} />
            <BoatType {...props} />
            <View>
                <BoatTitle {...props} />
                <BoatContent {...props} />
                <BoatLocateTime {...props} />
            </View>

            <View>
                {/*有被回復過才出現OK*/}
                <BoatReceiveIcon {...props} />
            </View>
        </View>
    );
}

//新回覆
const NewReply = (props) => {
    const { bgcolor, titletext, context, timetext, imgstyle, contstyle, redpoint, redpointstyle } = styles;
    if (false) {
        return (
            <View style={redpointstyle}>
                {/*有新的回覆才出現NO*/}
                <View style={redpoint}></View>
            </View>
        )
    } else {
        return (
            <View style={redpointstyle}>
            </View>
        )
    }
}
//船格式
const BoatType = (props) => {
    const { bgcolor, titletext, context, timetext, imgstyle, contstyle, redpoint, redpointstyle } = styles;
    return (
        <View style={imgstyle}>
            <Image source={require('../../assets/send/bboat.png')} />
        </View>
    )
}
//船標題
const BoatTitle = (props) => {
    const { bgcolor, titletext, context, timetext, imgstyle, contstyle, redpoint, redpointstyle } = styles;
    return (
        <View >
            {/*標題OK*/}
            < Text style={titletext} > {props.boatTitle}</Text>
        </View >
    )
}
//船內文
const BoatContent = (props) => {
    const { bgcolor, titletext, context, timetext, imgstyle, contstyle, redpoint, redpointstyle } = styles;
    return (
        <View style={contstyle}>
            {/*內文OK*/}
            <Text style={context}>{props.boatContent}</Text>
        </View>
    )
}
//船時間地點
const BoatLocateTime = (props) => {
    const { bgcolor, titletext, context, timetext, imgstyle, contstyle, redpoint, redpointstyle } = styles;
    return (
        <View>
            {/*時間NO與地點OK*/}
            <Text style={timetext}>台灣 / 台北市     >>  {moment(props.sendTime).format('YYYY/MM/DD')}</Text>
        </View>
    )
}

//icon
const BoatReplyIcon = (props) => {
    const { bgcolor, titletext, context, timetext, imgstyle, contstyle, redpoint, redpointstyle } = styles;
    return (
        <View>
            {/*回復過的才出現*/}
            <Image source={require('../../assets/iconReply.png')} />
        </View>
    )
}

//icon
const BoatReceiveIcon = (props) => {
    const { bgcolor, titletext, context, timetext, imgstyle, contstyle, redpoint, redpointstyle } = styles;
    if (props.receiveId) {
        return (
            <View>
                {/*回復過的才出現*/}
                <Image source={require('../../assets/iconReply.png')} />
            </View>
        )
    }
    return (
        <View>
            {/*回復過的才出現*/}
            <Image source={require('../../assets/iconMessage.png')} />
        </View>
    )

}


const styles = StyleSheet.create({
    bgcolor: {
        height: 120,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderStyle: "solid",
        borderBottomWidth: 1,
        borderColor: "#dfdfdf",
    },
    titletext: {
        fontSize: 18,
        color: '#595959',
    },
    context: {
        fontSize: 14,
        color: '#696969',
    },
    timetext: {
        fontSize: 12,
        color: '#9f9f9f',
    },
    imgstyle: {
        marginRight: 33,
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
    contstyle: {
        marginTop: 8,
        marginBottom: 19,
    },
    redpoint: {
        width: 10,
        height: 10,
        backgroundColor: '#e4007f',
        borderColor: '#e4007f',
        borderStyle: 'solid',
        borderRadius: 5.4,
    },
    redpointstyle: {
        marginRight: 10,
    }
})

export default Boat;