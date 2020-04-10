'use strict';

import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {Button} from '@ui-kitten/components';
import SvgUri from 'react-native-svg-uri';

export default ({currentEggHunt, navigation}) => {
  return (
    <SafeAreaView style={styles.layout}>
      <View style={styles.image}>
        <SvgUri
          width="240"
          height="240"
          source={require('../../assets/images/chicken.svg')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          appearance="filled"
          status="warning"
          onPress={() => navigation.navigate('StartHunt')}>
          Start Hunt
        </Button>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    padding: 30,
    flexDirection: 'column',
  },
  header: {
    fontFamily: 'Tahu!',
    fontSize: 55,
    color: '#fff',
    textAlign: 'center',
  },
  subHeader: {
    fontFamily: 'Tahu!',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  image: {
    paddingTop: 20,
    flex: 3,
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
