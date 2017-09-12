//歷史紀錄之送船
//歷史紀錄之收船
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';
import { Tile, List, ListItem } from 'react-native-elements';
import SelectedBoat from '../Shared/SelectedBoat';

// 這頁是抓取HisSendcard的內容
// Make a component
class HistorySend extends Component {
    constructor(props) {
        super(props);
        this.state = { historyrecive: [] };

    }

    render() {
        return (
            <View>
                <SelectedBoat />
            </View>
        );
    }
}

export default HistorySend;
