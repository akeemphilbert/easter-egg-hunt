'use strict';

import React from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {Button} from '@ui-kitten/components';
export default ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.layout}>
        <Text style={styles.header}>Easter Egg Hunt</Text>
        <Text style={styles.subHeader}>By Wepala</Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            appearance="filled"
            status="success"
            onPress={() => navigation.navigate('CreateEggHunt')}>
            Create Egg Hunt
          </Button>
          <Button
            style={styles.button}
            appearance="filled"
            status="warning"
            onPress={() => navigation.navigate('HuntStatus')}>
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
    fontSize: 50,
    color: '#fff',
    textAlign: 'center',
  },
  subHeader: {
    fontFamily: 'Tahu!',
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  button: {
    marginBottom: 20,
    width: '100%',
    borderRadius: 30,
  },
});
