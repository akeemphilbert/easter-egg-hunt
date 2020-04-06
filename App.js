import 'react-native-gesture-handler';
import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from "react-redux";
//store
import store from "./js/store";
//screens
import HomeScreen from  "./js/screens/Home"
import CreateEggHunt from "./js/containers/CreateEggHunt"
// import HideEggWrapper from "./js/screens/HideEggWrapper";
import HideEgg from "./js/containers/HideEgg";
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
                  options={{title: 'Welcome'}}
              />
                <Stack.Screen name="CreateEggHunt" component={CreateEggHunt} />
                <Stack.Screen name="HideEgg" component={HideEgg} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
    );
  }
}
