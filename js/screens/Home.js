'use strict';

import React, { Component } from 'react';
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';

export default ({navigation}) => {
    return (
        <SafeAreaView>
            <View>
                <View>
                    <Text style={styles.title}>Easter Egg Hunt</Text>
                    <Text style={styles.byLine}>By Wepala</Text>
                </View>
                <View>
                    <Button title="Create Egg Hunt" onPress={() => navigation.navigate('CreateEggHunt')} />
                    <Button title="Join Egg Hunt" />
                    <Button title="List of Hunts" />
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flexDirection: 'column'
    },
    header: {
      flex: 10, backgroundColor: '#2196F3'
    },
    buttons: {
      flex: 1, backgroundColor: '#8BC34A'
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
    },
    byLine: {
        textAlign: 'center'
    },
    button: {
        marginBottom: 20
    },
    action: {
        backgroundColor: "#5cb85c",
    },
    join: {
        backgroundColor: "#f0ad4e",
    },
    info: {
        backgroundColor: "#428bca",
    }
});