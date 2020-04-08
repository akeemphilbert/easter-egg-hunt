'use strict';

import React, {Component} from 'react';
import {StyleSheet, SafeAreaView, View, Text} from 'react-native';
import {Button} from '@ui-kitten/components';
import SvgUri from 'react-native-svg-uri';
import {getDistance, requestLocatePermission} from "../helpers";
import Geolocation from "@react-native-community/geolocation";

export default class HuntStatus extends Component {
  state = {
    farFromStart:true
  };

  constructor(props) {
    super(props);
  }

  watchID = null;

  componentDidMount() {
    requestLocatePermission().then(() => {
      Geolocation.getCurrentPosition(
          (position) => {
            console.log('start position', position);
            this.setState({farFromStart:!this.isNearStart(position.coords)});
          },
          (error) => console.log('error occured during find location', error),
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000},
      );
      this.watchID = Geolocation.watchPosition(
          (position) => {
            console.log('updated position', position);
            if (this.state.farFromStart) {
              this.setState({farFromStart:!this.isNearStart(position.coords)});
            }
          },
          (error) => console.log('error occured during find location', error),
          {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 1000,
            distanceFilter: 1,
            interval: 2000,
            fastestInterval: 1000,
          },
      );
    });
  }

  isNearStart(coords) {
    return getDistance(this.props.start.latitude, this.props.start.longitude,coords.latitude, coords.longitude) < 20;
  }

  render() {
    return (
        <SafeAreaView style={styles.layout}>
          <Text style={styles.subHeader}>Eggs You've Found</Text>
          <Text style={styles.header}>{this.props.eggsFound.length}!</Text>
          <View style={styles.image}>
            <SvgUri
                width="240"
                height="240"
                source={require('../../assets/images/egg-hunt.svg')}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
                disabled={this.state.farFromStart || this.props.allEggsFound}
                style={styles.button}
                appearance="primary"
                onPress={() => this.props.navigation.navigate('FindEgg')}>
              Find Eggs
            </Button>
          </View>
        </SafeAreaView>
    );
  }
}

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
