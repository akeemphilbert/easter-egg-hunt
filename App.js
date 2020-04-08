import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import {ApplicationProvider} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import {default as theme} from './theme.json';

//store
import store from './js/store';
//screens
import HomeScreen from './js/screens/Home';
import EggList from './js/containers/EggList';
import HideEgg from './js/containers/HideEgg';
import Invite from './js/containers/Invite';
import FindEgg from './js/containers/FindEgg';
import HuntStatus from './js/containers/HuntStatus';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: true}}>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="CreateEggHunt"
                component={EggList}
                options={{
                  ...headerOptions,
                  title: 'Create Egg Hunt!',
                }}
              />
              <Stack.Screen
                name="HideEgg"
                component={HideEgg}
                options={{
                  ...headerOptions,
                  title: 'Hide Egg',
                }}
              />
              <Stack.Screen
                name="Invite"
                component={Invite}
                options={{
                  ...headerOptions,
                  title: 'Invite Friends!',
                }}
              />
              <Stack.Screen
                name="FindEgg"
                component={FindEgg}
                options={{
                  ...headerOptions,
                  title: 'Find Egg!',
                }}
              />
              <Stack.Screen
                name="StartHunt"
                component={HuntStatus}
                options={{
                  ...headerOptions,
                  title: 'Start Hunt!',
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      </ApplicationProvider>
    );
  }
}

const headerOptions = {
  title: 'Title',
  headerStyle: {
    backgroundColor: '#438FCB',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontFamily: 'Tahu!',
    fontSize: 25,
  },
};
