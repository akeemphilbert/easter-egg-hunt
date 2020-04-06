'use strict';

import React, { Component } from 'react';
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';
import {ViroARScene, ViroText, ViroARSceneNavigator} from "react-viro";


const EggPlacer = () => {
    return (
        <ViroARScene>
            <ViroText text="hello world" scale={[.5, .5, .5]} position={[0, 0, -1]}  />
        </ViroARScene>
    );
}

export default ({navigation}) => {
    return (

            <ViroARSceneNavigator initialScene={{scene: EggPlacer}} />

    );
}