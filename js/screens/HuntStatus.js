'use strict';

import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {Button} from '@ui-kitten/components';
import SvgUri from 'react-native-svg-uri';

export default ({eggsFound, navigation}) => {
  return (
    <SafeAreaView style={styles.layout}>
      <Text style={styles.subHeader}>Eggs You've Found</Text>
      <Text style={styles.header}>{eggsFound.length}!</Text>
      <View style={styles.image}>
        <SvgUri
          width="240"
          height="240"
          source={require('../../assets/images/egg-hunt.svg')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          appearance="primary"
          onPress={() => navigation.navigate('FindEgg')}>
          Find Eggs
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    padding: 30,
  },
  header: {
    fontFamily: 'Tahu!',
    fontSize: 55,
    color: '#438FCB',
    textAlign: 'center',
    margin: 0,
    padding: 0,
  },
  subHeader: {
    fontFamily: 'Tahu!',
    fontSize: 30,
    color: '#438FCB',
    textAlign: 'center',
  },
  image: {
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    marginTop: 10,
    width: '100%',
    borderRadius: 30,
  },
});
