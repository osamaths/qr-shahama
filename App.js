/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
"use strict";

import React, { Component } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
  ImageBackground,
  ScrollView
} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import PhotoLists from "./Components/PhotoLists";
import Letter from "./Components/Letter";
import { decryptKey } from "./src/Actions/requsets";

const KEY_PASS = "true" || "Malfouf is the best food ever.";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      textDetected: false,
      loading: false
    };
  }

  onSuccess(e) {
    console.log("qr data is:", e.data);

    this.setState({
      loading: true
    });

    if (decryptKey(e.data) === KEY_PASS) {
      this.setState({
        text: e.data,
        textDetected: true,
        loading: true
      });
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    // console.log(encryption.encrypt(KEY_PASS));

    if (!this.state.textDetected) {
      return <QRCodeScanner onRead={this.onSuccess.bind(this)} />;
    } else {
      return (
        <ImageBackground
          style={styles.container}
          imageStyle={{
            resizeMode: "cover"
          }}
          source={require("./Images/1.jpg")}
        >
          <StatusBar hidden />
          <View style={styles.shadowBG}>
            <ScrollView style={{ flex: 1 }}>
              <View style={styles.info}>
                <Letter />
              </View>
              <PhotoLists />
            </ScrollView>
          </View>
        </ImageBackground>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  shadowBG: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)"
  },
  info: {}
});
