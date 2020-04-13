'use strict';

import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {Button} from '@ui-kitten/components';
import {FlatGrid} from 'react-native-super-grid';

import EggItem from './EggItem';
import {addHuntEggs} from '../actions';
import {requestLocatePermission} from "../helpers";
import Geolocation from "@react-native-community/geolocation";

export default ({eggs, onPickEgg,updateStartPosition,total, navigation}) => {
  const items = Object.values(eggs);
  requestLocatePermission().then(()=>{
    Geolocation.getCurrentPosition(
        position => {
          console.log("start position",position);
          updateStartPosition(position.coords);
        },
        error => console.log("error getting position",error),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  });
  return (
    <SafeAreaView style={styles.layout}>
      <Text style={styles.header}>
        {total} eggs hidden. Hehehe!
      </Text>
      <FlatGrid
        fadingEdgeLength={20}
        showsVerticalScrollIndicator={true}
        itemDimension={85}
        items={items}
        renderItem={({item, key}) => (
          <EggItem
            key={key}
            egg={item}
            onPickEgg={onPickEgg}
            navigation={navigation}
          />
        )}
      />
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          appearance="primary"
          onPress={() => navigation.navigate('Invite')}>
          Finished Hiding Eggs
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    paddingTop: 10,
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 30,
    justifyContent: 'flex-start',
  },
  header: {
    fontFamily: 'Tahu!',
    fontSize: 40,
    color: '#438FCB',
    textAlign: 'center',
  },
  subHeader: {
    fontFamily: 'Tahu!',
    fontSize: 25,
    color: '#438FCB',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  button: {
    marginBottom: 10,
    width: '100%',
    borderRadius: 30,
  },
});
