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
  Text,
  View,
  ImageBackground,
  ScrollView
} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import PhotoLists from "./Components/PhotoLists";

const KEY_PASS = "true";
const WORDS =
  "\"The design is really good and while the actual UX is going to needly good and while the actual UX is going to needly good and while the actual UX is going to needly good and while the actual UX is going to needly good and while the actual UX is going to needly good and while the actual UX is going to needly good and while the actual UX is going to needly good and while the actual UX is going to needly good and while the actual UX is going to need some work it's very cuhile the actual UX is going to need some work it's very cuhile the actual UX is going to need some work it's very cuhile the actual UX is going to need some work it's very customizable and built on a solid code base. Definitely, a product to \"grow\" with if you are building a listing directory.\"";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      textDetected: false
    };
  }

  onSuccess(e) {
    console.log("qr data is: ", e.data);
    if ((e.data = KEY_PASS)) {
      this.setState({
        text: e.data,
        textDetected: true
      });
    }
  }

  render() {
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
          <View style={styles.shadowBG}>
            <ScrollView style={{ flex: 1 }}>
              <View style={styles.info}>
                <Text style={styles.title}>{"You are My Love"}</Text>
                <Text style={styles.centerText}>{WORDS}</Text>
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
  info: {},
  centerText: {
    fontSize: 20,
    padding: 10,
    color: "#eee",
    fontFamily: "cursive"
  },
  title: {
    fontSize: 40,
    alignSelf: "center",
    marginTop: 10,
    color: "gold",
    fontFamily: "cursive",
    fontWeight: "bold",
    marginBottom: 20
  }
});
