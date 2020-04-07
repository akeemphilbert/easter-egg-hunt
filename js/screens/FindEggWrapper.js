import React, {Component} from 'react';
import {ViroARScene, ViroARSceneNavigator, ViroText, Viro3DObject, ViroAmbientLight, ViroBox,ViroMaterials, ViroSphere,ViroNode} from "react-viro";
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export default class FindEggWrapper extends Component {

    state = {
        initialPosition: 'unknown',
        lastPosition: 'unknown',
    };

    constructor(props) {
        super(props)
    }

    watchID = null;

    componentDidMount() {
        Geolocation.getCurrentPosition(
            position => {
                const initialPosition = JSON.stringify(position);
                this.setState({initialPosition});
            },
            error => Alert.alert('Error', JSON.stringify(error)),
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
        );
        this.watchID = Geolocation.watchPosition(position => {
            const lastPosition = JSON.stringify(position);
            this.setState({lastPosition});
        });
    }

    componentWillUnmount() {
        this.watchID != null && Geolocation.clearWatch(this.watchID);
    }

    render() {

        const EggFinder = () => {
            console.log("unplaced eggs",this.props.hiddenEggs)

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
                    { Object.values(this.props.hiddenEggs).map((egg,key)=>{
                        return (
                            <ViroSphere
                                position={egg.position}
                                materials={[egg.eggId]}
                                scale={[.3, .3, .1]}
                                onClick={()=> this.props.onFindEgg(egg)}
                                key={key}
                            />
                        )
                    })}

                </ViroARScene>


            );
        }

        return <ViroARSceneNavigator initialScene={{scene: EggFinder}} />
    }
}