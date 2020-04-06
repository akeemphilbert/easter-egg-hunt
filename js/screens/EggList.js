'use strict';

import React, { Component } from 'react';
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';

export default ({onHideEggs, navigation}) => {
    return (
        <SafeAreaView>
            <Button title="Hide Eggs" onPress={() => onHideEggs({
                id: "some id",
                title: "example egg",
                image: "some image"
            },2,navigation)}  />
        </SafeAreaView>
    )
}

