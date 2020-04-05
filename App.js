import React, { Component } from 'react';
import {Provider} from "react-redux";
//store
import store from "./js/store";
//screens
import CreateEggHunt from "./js/containers/CreateEggHunt"

export default class EggHuntApp extends Component {
  render() {
    return (
        <Provider store={store}>
          <CreateEggHunt />
        </Provider>
    );
  }
}

module.exports = EggHuntApp
