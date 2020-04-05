'use strict';

import React, { Component } from 'react';
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';

export default ({onHideEggs,currentEggHunt}) => {
    return (
        <SafeAreaView>
            <Button title="Hide Eggs" onPress={() => onHideEggs(currentEggHunt,{
                id: "some id",
                title: "example egg",
                image: "some image"
            },2)}  />
        </SafeAreaView>
    )
}

