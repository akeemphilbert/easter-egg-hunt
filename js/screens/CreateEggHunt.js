'use strict';

import React, { Component } from 'react';
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';
import EggList from "./EggList";
import HideEggAR from "./HideEggWrapper";

export default ({currentEggHunt, onHideEggs, navigation}) => {
            return <SafeAreaView>
                <EggList onHideEggs={onHideEggs} navigation={navigation}/>
            </SafeAreaView>;

}

