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

                "1bd4b823-1beb-4468-b150-d93a1d6ae117": {
                    diffuseTexture: require('../res/eggs/1bd4b823-1beb-4468-b150-d93a1d6ae117.jpg'),
                },
                "06aab64c-dbd0-466c-8499-0efff5f8f4cd": {
                    diffuseTexture: require('../res/eggs/06aab64c-dbd0-466c-8499-0efff5f8f4cd.jpg'),
                },
                "67fbfd37-603b-4287-869d-3a7365b3141e": {
                    diffuseTexture: require('../res/eggs/67fbfd37-603b-4287-869d-3a7365b3141e.jpg'),
                },
                "92d3f8a6-06be-420a-9cac-621e13d60bbf": {
                    diffuseTexture: require('../res/eggs/92d3f8a6-06be-420a-9cac-621e13d60bbf.jpg'),
                },
                //gold
                "92d9d6c7-1b74-46c6-92d6-9b407dfe30b2": {
                    diffuseTexture: require('../res/eggs/92d9d6c7-1b74-46c6-92d6-9b407dfe30b2.png'),
                },
                "96b16cab-c11f-4989-b38b-05c9b8f25461": {
                    diffuseTexture: require('../res/eggs/96b16cab-c11f-4989-b38b-05c9b8f25461.jpg'),
                },
                "945afe34-e5a0-46fc-89bd-4a77e763ee90": {
                    diffuseTexture: require('../res/eggs/945afe34-e5a0-46fc-89bd-4a77e763ee90.jpg'),
                },
                "4467c943-a350-452d-a074-98611a9a3f53": {
                    diffuseTexture: require('../res/eggs/4467c943-a350-452d-a074-98611a9a3f53.jpg'),
                },
                "b0710951-1b95-4831-9e82-c3c7cf81c4ed": {
                    diffuseTexture: require('../res/eggs/b0710951-1b95-4831-9e82-c3c7cf81c4ed.jpg'),
                },


                "b887927e-7b1e-4485-9c6a-d586580c0d01": {
                    diffuseTexture: require('../res/eggs/b887927e-7b1e-4485-9c6a-d586580c0d01.jpg'),
                },

                "b6371107-6f68-4d4c-b616-0ce285242626": {
                    diffuseTexture: require('../res/eggs/b6371107-6f68-4d4c-b616-0ce285242626.jpg'),
                },

                "c1640ef1-06f9-43ad-8631-5848735db10e": {
                    diffuseTexture: require('../res/eggs/c1640ef1-06f9-43ad-8631-5848735db10e.png'),
                },

                "d73488c1-9556-4b5e-8ab0-999fbdfc1341": {
                    diffuseTexture: require('../res/eggs/d73488c1-9556-4b5e-8ab0-999fbdfc1341.jpg'),
                },

                "e4ec47b4-45b7-4237-a053-3e770c4ef1b6": {
                    diffuseTexture: require('../res/eggs/e4ec47b4-45b7-4237-a053-3e770c4ef1b6.jpg'),
                },
                "f406e3d6-eea5-459c-b476-ae8ed6911846": {
                    diffuseTexture: require('../res/eggs/f406e3d6-eea5-459c-b476-ae8ed6911846.jpg'),
                },





            });


            return (
                <ViroARScene>
                    <ViroAmbientLight color="#FFFFFF" intensity={20} />
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