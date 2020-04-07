import React, {Component} from 'react';
import {ViroARScene, ViroARSceneNavigator, ViroText, Viro3DObject, ViroAmbientLight, ViroBox,ViroMaterials, ViroSphere,ViroNode} from "react-viro";
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';

export default class FindEggWrapper extends Component {
    state = {
        initialPosition: 'unknown',
        lastPosition: 'unknown',
    }

    watchID = null;

    componentDidMount() {
        Geolocation.getCurrentPosition(
            position => {
                const initialPosition = JSON.stringify(position);
                this.setState({initialPosition});
            },
            error => Alert.alert('Error', JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
        this.watchID = Geolocation.watchPosition(position => {
            const lastPosition = JSON.stringify(position);
            this.setState({lastPosition});
        });
    }

    componentWillUnmount() {
        this.watchID != null && Geolocation.clearWatch(this.watchID);
    }
}