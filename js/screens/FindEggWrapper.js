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
import {requestLocatePermission, calculateDistance} from '../helpers';

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
    });
  }

  /**
   * Update the component state based on the eggs that are near
   *
   * @param position
   */
  showEggsThatAreNear(position) {
    //use some formula to find the eggs that are near
    console.log('eggs to search for', position, this.props.hiddenEggs);
    let eggs = this.props.hiddenEggs.filter((e) =>
      e.position !== undefined
        ? calculateDistance(position, e.position) < 4
        : true,
    );

    if (
      this.props.hiddenEggs.length > 0 &&
      this.props.hiddenEggs[0].position !== undefined
    ) {
      console.log(
        'distance',
        calculateDistance(this.props.hiddenEggs[0].position, position),
      );
    }

    console.log('eggs to find', eggs.length);

    if (this.state.eggs.length !== eggs.length) {
      this.setState({eggs: eggs});
    }
  }

  componentWillUnmount() {
    this.watchID != null && Geolocation.clearWatch(this.watchID);
  }

  render() {
    if (this.props.hiddenEggs.length === 0) {
      this.props.navigation.navigate('StartHunt');
    }
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
        <ViroARScene
          onCameraTransformUpdate={(ct) => {
            this.showEggsThatAreNear(ct.position);
          }}>
          <ViroAmbientLight color="#FFFFFF" intensity={20} />
          <ViroNode position={[0, 0, 0]}>
            {Object.values(this.state.eggs).map((egg, key) => {
              return (
                <ViroSphere
                  position={egg.position}
                  materials={[egg.eggId]}
                  scale={[0.3, 0.3, 0.1]}
                  radius={0.5}
                  onClick={() => this.props.onFindEgg(egg)}
                  key={key}
                />
              );
            })}
          </ViroNode>
        </ViroARScene>
      );
    };

    return <ViroARSceneNavigator initialScene={{scene: EggFinder}} />;
  }
}
