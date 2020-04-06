'use strict';

import React from 'react';
import {ViroARScene, ViroARSceneNavigator, ViroText} from "react-viro";
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';


export default ({eggs,onHideEgg}) => {
    const EggPlacer = () => {
        return (
            <ViroARScene>
                <ViroText text={eggs[0].id} scale={[.5, .5, .5]} position={[0, 0, -1]}  />
            </ViroARScene>
        );
    }

    if (eggs.length > 0) {
        return (
            <ViroARSceneNavigator initialScene={{scene: EggPlacer}} />
        );
    } else {
        return (
            <SafeAreaView>
                <Button title="Go To Next Step"  />
            </SafeAreaView>
        )
    }

}