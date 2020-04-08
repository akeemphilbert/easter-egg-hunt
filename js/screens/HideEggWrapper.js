'use strict';

import React, {Component} from 'react';
import {ViroARScene, ViroARSceneNavigator, ViroText, Viro3DObject, ViroAmbientLight, ViroBox,ViroMaterials, ViroSphere,ViroNode} from "react-viro";
import {StyleSheet, SafeAreaView, View, Button, Text, PermissionsAndroid, Alert} from 'react-native';
import Geolocation from "@react-native-community/geolocation";
import {requestLocatePermission} from "../helpers";

export default class HideEggWrapper extends Component {
    state = {

    };

    constructor(props) {
        super(props)
    }

    watchID = null;

    componentDidMount() {
        requestLocatePermission().then(()=>{
            Geolocation.getCurrentPosition(
                position => {
                    console.log("start position",position);
                    this.props.updateBunnyPosition(this.props.unplacedEggs[0],position.coords);
                },
                error => console.log("error getting position",error),
                {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
            );
        })
    }

    componentWillUnmount() {

    }

    render() {

        const EggPlacer = () => {
            //because of the limitation of require all the eggs will need to be mapped here
            ViroMaterials.createMaterials({
                "b887927e-7b1e-4485-9c6a-d586580c0d01": {
                    diffuseTexture: require('../res/eggs/b887927e-7b1e-4485-9c6a-d586580c0d01.jpg'),
                },"1bd4b823-1beb-4468-b150-d93a1d6ae117": {
                    diffuseTexture: require('../res/eggs/1bd4b823-1beb-4468-b150-d93a1d6ae117.jpg'),
                },
            });


            return (
                <ViroARScene>
                    <ViroAmbientLight color="#FFFFFF" />
                    <ViroNode position={[0,-1,0]} dragType="FixedToWorld" onDrag={(dragToPos)=>this.props.onHideEgg(this.props.unplacedEggs[0],dragToPos)} onClick={()=> this.props.onComplete(this.props.unplacedEggs[0],this.props.location)}>
                        <ViroSphere
                            position={[0, -.5, -1]}
                            materials={[this.props.unplacedEggs[0].eggId]}
                            scale={[.3, .3, .1]}

                        />
                    </ViroNode>
                </ViroARScene>


            );
        }

        if (this.props.unplacedEggs.length > 0) {
            return (
                <ViroARSceneNavigator initialScene={{scene: EggPlacer}} />
            );
        } else {
            this.props.navigation.navigate("CreateEggHunt");
            return <View/>
        }
    }
}