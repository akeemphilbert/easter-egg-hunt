'use strict';

import React, { Component } from 'react';
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';
import {ViroARScene, ViroText} from "react-viro";

export default ({navigation}) => {
    return (
        <SafeAreaView>
            <ViroARScene>
                <ViroText text="Egg" scale={[.5, .5, .5]} position={[0, 0, -1]} />
            </ViroARScene>
        </SafeAreaView>
    )
}