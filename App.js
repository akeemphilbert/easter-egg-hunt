import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from "react-redux";
//store
import store from "./js/store";
//screens
import HomeScreen from  "./js/screens/Home"
import EggList from "./js/containers/EggList"
import HideEgg from "./js/containers/HideEgg";
import Invite from "./js/containers/Invite";
import FindEgg from "./js/containers/FindEgg";
import HuntStatus from "./js/containers/HuntStatus";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{title: 'Egg Hunt'}}
              />
                <Stack.Screen name="CreateEggHunt" component={EggList} />
                <Stack.Screen name="HideEgg" component={HideEgg} />
                <Stack.Screen name="Invite" component={Invite} />
                <Stack.Screen name="FindEgg" component={FindEgg} />
                <Stack.Screen name="StartHunt" component={HuntStatus} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
    );
  }
}
