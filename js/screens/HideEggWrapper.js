'use strict';

import React from 'react';
import {ViroARScene, ViroARSceneNavigator, ViroText, Viro3DObject, ViroAmbientLight, ViroBox,ViroMaterials, ViroSphere,ViroNode} from "react-viro";
import {StyleSheet, SafeAreaView, View, Button, Text} from 'react-native';


export default ({unplacedEggs,onHideEgg, onComplete,navigation}) => {
    const EggPlacer = () => {
        console.log("unplaced eggs",unplacedEggs)
        //FIXME huge hack because this is an ARScene and it's not getting updated.
        unplacedEggs = Object.values(unplacedEggs).filter(e => e.position === undefined)

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
                    <ViroNode position={[0,-1,0]} dragType="FixedToWorld" onDrag={(dragToPos)=>onHideEgg(unplacedEggs[0],dragToPos)} onClick={()=> onComplete(unplacedEggs[0])}>
                        <ViroSphere
                            position={[0, -.5, -1]}
                            materials={[unplacedEggs[0].eggId]}
                            scale={[.3, .3, .1]}

                        />
                    </ViroNode>
                </ViroARScene>


        );
    }

    if (unplacedEggs.length > 0) {
        return (
            <ViroARSceneNavigator initialScene={{scene: EggPlacer}} />
        );
    } else {
        navigation.navigate("CreateEggHunt");
        return <View/>
    }

}