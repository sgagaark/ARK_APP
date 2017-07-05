import React, { Component } from 'react';
import { Platform, View, ActivityIndicator } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';
import { Icon } from 'react-native-elements';
import axios from 'axios';

const UBIKE_URL = 'http://data.ntpc.gov.tw/od/data/api/54DDDC93-589C-4858-9C95-18B2046CC1FC?$format=json';

class Ubike extends Component {

    state = {
        mapLoaded: false,
        region: {
            longitude: 121.544637,
            latitude: 25.024624,
            longitudeDelta: 0.01,
            latitudeDelta: 0.02
        },
        ubike: [],
        errorMessage: null

    }

    componentWillMount() {
        // axios.get(UBIKE_URL)
        //     .then((response) => {
        //         this.setState({ ubike: response.data });
        //     });

        this._getUbikeAsync();

        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    componentDidMount() {
        this.setState({ mapLoaded: true });
    }

    onRegionChangeComplete = (region) => {
        this.setState({ region });
    }

    _getUbikeAsync = async () => {
        let response = await axios.get(UBIKE_URL);
        this.setState({ ubike: response.data });
    }

    _getLocationAsync = async () => {
        let status = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        };

        let location = await Location.getCurrentPositionAsync({});
        this.setState({
            region: {
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                longitudeDelta: 0.01,
                latitudeDelta: 0.02
            }
        });
    };

    render() {
        if (!this.state.mapLoaded) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <ActivityIndicator size="large" />
                </View>
            );
        }

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    region={this.state.region}
                    style={{ flex: 1 }}
                    // mapType='hybrid'
                    // showsTraffic
                    // provider='google'

                    onRegionChangeComplete={this.onRegionChangeComplete}
                >

                    {this.state.ubike.map(site => (
                        <MapView.Marker
                            coordinate={{ latitude: Number(site.lat), longitude: Number(site.lng) }}
                            key={site.sno}
                            title={`${site.sna} ${site.sbi}/${site.tot}`}
                            description={site.ar}
                        />
                    ))}

                </MapView>
                <Icon
                    raised
                    name='my-location'
                    color='white'
                    containerStyle={{
                        backgroundColor: '#517fa4',
                        position: 'absolute',
                        right: 20,
                        bottom: 40
                    }}
                    onPress={this._getLocationAsync}
                />
            </View>
        );
    }
}

export default Ubike;
