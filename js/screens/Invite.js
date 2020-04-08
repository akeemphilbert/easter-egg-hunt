'use strict';

import React, { Component } from 'react';
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';

export default ({currentEggHunt, navigation}) => {
    return (
        <SafeAreaView>
            <Button title="Invite Users" onPress={() => {}}  />
            <Button title="Start Hunt" onPress={() => {navigation.navigate("StartHunt")}}  />
        </SafeAreaView>
    )
}

