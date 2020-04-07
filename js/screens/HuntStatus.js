'use strict';

import React, { Component } from 'react';
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';

export default ({eggsFound, navigation}) => {
    return <SafeAreaView>
        <Text title={eggsFound.length}/>
        <Button title="Find Eggs" onPress={()=>navigation.navigate("FindEgg")}/>
    </SafeAreaView>;
}

