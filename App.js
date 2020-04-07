import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import {ApplicationProvider} from '@ui-kitten/components';
import {mapping, light as lightTheme} from '@eva-design/eva';

//store
import store from './js/store';
//screens
import HomeScreen from './js/screens/Home';
import CreateEggHunt from './js/containers/CreateEggHunt';
// import HideEggWrapper from "./js/screens/HideEggWrapper";
import HideEgg from './js/containers/HideEgg';
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="CreateEggHunt" component={CreateEggHunt} />
              <Stack.Screen name="HideEgg" component={HideEgg} />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </ApplicationProvider>
    );
  }
}
