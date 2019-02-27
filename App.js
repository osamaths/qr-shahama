/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
"use strict";

import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Router, Scene } from "react-native-router-flux";
import Login from "./Components/Login";
import QR from "./Components/QR";
import Fingerprint from "./Components/FingerPrint";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="login" component={Login} title="Login" initial />
          <Scene key="qr" component={QR} title="QR Code" />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
