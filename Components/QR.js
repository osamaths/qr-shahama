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
  ScrollView,
  Text
} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import PhotoLists from "./PhotoLists";
import Letter from "./Letter";
import Loading from "./Loading";
import { backgrounds, images } from "../src/Actions/Storage";

const KEY_PASS = "Malfouf is the best food ever.";

export default class QR extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textDetected: false,
      loading: false,
      isPrivate: false
    };

    this.decryptKey = this.decryptKey.bind(this);
  }

  checkToken(decryptedText) {
    if (decryptedText === KEY_PASS) {
      this.setState({
        textDetected: true,
        loading: false
      });
    } else {
      this.setState({
        loading: false
      });
    }
  }

  decryptKey = encrypted => {
    var req = {
      method: "POST",
      headers: {
        Accepts: "application/json",
        "content-Type": "application/json"
      },
      body: JSON.stringify({
        encrypted: encrypted
      })
    };
    var url = "https://qr-shahama-server.herokuapp.com/decrypt";

    fetch(url, req)
      .then(response => {
        // In this case, we check the content-type of the response
        if (response.headers.get("content-type").match(/application\/json/)) {
          return response.json();
        }
        return response;
        // You can also try "return response.text();"
      })
      .then(responseJson => {
        this.checkToken(responseJson._bodyText);
        return responseJson;
      })
      .catch(err => {
        console.log("Error", err);
        return "Error";
      });
  };

  onSuccess(e) {
    this.setState(
      {
        loading: true
      },
      () => {
        this.decryptKey(e.data);
      }
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1 }}>
          <Loading />
        </View>
      );
    }
    if (!this.state.textDetected && !this.state.loading) {
      return <QRCodeScanner onRead={this.onSuccess.bind(this)} />;
    } else {
      return (
        <ImageBackground
          style={styles.container}
          imageStyle={{
            resizeMode: "cover"
          }}
          source={backgrounds[Math.floor(Math.random() * backgrounds.length)]}
        >
          <StatusBar hidden />
          <View style={styles.shadowBG}>
            <Text style={styles.title}>{"Sweetie"}</Text>
            <ScrollView style={{ flex: 1 }}>
              <View style={styles.info}>
                <Letter />
              </View>
              <PhotoLists
                photos={this.state.isPrivate ? images.private : images.public}
              />
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
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  info: {},
  title: {
    fontSize: 40,
    alignSelf: "center",
    marginTop: 25,
    color: "goldenrod",
    fontFamily: "cursive",
    fontWeight: "bold"
  }
});
