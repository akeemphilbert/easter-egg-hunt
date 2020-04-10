'use strict';

import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {Button} from '@ui-kitten/components';
import SvgUri from 'react-native-svg-uri';

export default ({navigation, reset}) => {
  return (
    <SafeAreaView>
      <View style={styles.layout}>
        <Text style={styles.header}>Easter Egg Hunt</Text>
        <Text style={styles.subHeader}>By Wepala</Text>
        <View style={styles.image}>
          <SvgUri
            width="240"
            height="240"
            source={require('../../assets/images/basket.svg')}
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            appearance="filled"
            status="success"
            onPress={() => {
              reset();
              navigation.navigate('CreateEggHunt');
            }}>
            Create Egg Hunt
          </Button>
          <Button
            style={styles.button}
            appearance="filled"
            status="warning"
            onPress={() => navigation.navigate('StartHunt')}>
            Join Egg Hunt
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  layout: {
    height: '100%',
    padding: 30,
    backgroundColor: '#438FCB',
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
