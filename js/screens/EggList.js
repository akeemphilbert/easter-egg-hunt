'use strict';

import React, { Component } from 'react';
import {StyleSheet, SafeAreaView , Button} from 'react-native';
import {addHuntEggs} from "../actions";

export default ({eggs,onPickEgg, navigation}) => {
    return (
        <SafeAreaView>
            { Object.values(eggs).map((egg,key)=>{
                return (
                    <Button title={egg.title} onPress={()=>onPickEgg(egg,navigation)} key={key}/>
                )
            })

            }
            <Button title="Invite Users" onPress={()=>navigation.navigate("Invite")}/>
        </SafeAreaView>
    )
}

