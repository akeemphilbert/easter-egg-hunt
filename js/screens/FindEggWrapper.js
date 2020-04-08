import React, {Component} from 'react';
import {
  ViroARScene,
  ViroARSceneNavigator,
  ViroText,
  Viro3DObject,
  ViroAmbientLight,
  ViroBox,
  ViroMaterials,
  ViroSphere,
  ViroNode,
} from 'react-viro';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Button,
  Text,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {requestLocatePermission, getDistance} from '../helpers';

export default class FindEggWrapper extends Component {
  state = {
    eggs: [],
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
          this.showEggsThatAreNear(position.coords);
        },
        (error) => console.log('error occured during find location', error),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 10000},
      );
      this.watchID = Geolocation.watchPosition(
        (position) => {
          console.log('updated position', position);
          this.showEggsThatAreNear(position.coords);
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

  /**
   * Update the component state based on the eggs that are near
   *
   * @param coords
   */
  showEggsThatAreNear(coords) {
    //use some formula to find the eggs that are near
    console.log('eggs to search for', this.props.hiddenEggs);
    let eggs = this.props.hiddenEggs.filter((e) =>
      e.location !== undefined
        ? getDistance(
            coords.latitude,
            coords.longitude,
            e.location.latitude,
            e.location.longitude,
          ) < 4
        : true,
    );
    if (this.props.hiddenEggs[0].location !== undefined) {
      console.log(
        'eggs near me',
        eggs,
        getDistance(
          coords.latitude,
          coords.longitude,
          this.props.hiddenEggs[0].location.latitude,
          this.props.hiddenEggs[0].location.longitude,
        ),
      );
    }

    if (this.state.eggs.length !== eggs.length) {
      this.setState({eggs: eggs});
    }
  }

  componentWillUnmount() {
    this.watchID != null && Geolocation.clearWatch(this.watchID);
  }

  render() {
    const EggFinder = () => {
      //because of the limitation of require all the eggs will need to be mapped here
      ViroMaterials.createMaterials({
        'b887927e-7b1e-4485-9c6a-d586580c0d01': {
          diffuseTexture: require('../res/eggs/b887927e-7b1e-4485-9c6a-d586580c0d01.jpg'),
        },
        '1bd4b823-1beb-4468-b150-d93a1d6ae117': {
          diffuseTexture: require('../res/eggs/1bd4b823-1beb-4468-b150-d93a1d6ae117.jpg'),
        },
      });

      return (
        <ViroARScene>
          <ViroAmbientLight color="#FFFFFF" />
          {Object.values(this.state.eggs).map((egg, key) => {
            return (
              <ViroSphere
                position={egg.position}
                materials={[egg.eggId]}
                scale={[0.3, 0.3, 0.1]}
                onClick={() => this.props.onFindEgg(egg)}
                key={key}
              />
            );
          })}
        </ViroARScene>
      );
    };

    return <ViroARSceneNavigator initialScene={{scene: EggFinder}} />;
  }
}
