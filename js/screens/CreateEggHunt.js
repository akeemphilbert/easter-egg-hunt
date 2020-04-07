'use strict';

import React, { Component } from 'react';
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';
import EggList from "./EggList";
import HideEggAR from "./HideEggWrapper";

export default ({eggs, navigation}) => {
            return <SafeAreaView>
                <EggList eggs={eggs} navigation={navigation}/>
            </SafeAreaView>;

}

