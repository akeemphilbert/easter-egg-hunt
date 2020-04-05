'use strict';

import React, { Component } from 'react';
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';
import EggList from "./EggList";
import HideEggAR from "./HideEggAR";

export default ({currentEggHunt, onHideEggs}) => {
        //if there are no eggs then show the list to choose eggs from otherwise show the screen for hiding the eggs
        if (true) {
            return <SafeAreaView>
                <EggList onHideEggs={onHideEggs} currentEggHunt={currentEggHunt}/>
            </SafeAreaView>;
        } else {
            return <SafeAreaView>
                <HideEggAR />
            </SafeAreaView>;
        }
}

