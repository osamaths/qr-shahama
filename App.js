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
  ActivityIndicator,
  Image
} from "react-native";
import QRCodeScanner from "react-native-qrcode-scanner";
import PhotoLists from "./Components/PhotoLists";
import Letter from "./Components/Letter";
import Loading from "./Components/Loading";
// import ActivityIndicatorHeart from "./Components/ActivityIndicatorHeart";
// import { decryptKey } from "./src/Actions/requsets";

const KEY_PASS = "Malfouf is the best food ever.";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textDetected: false,
      loading: false
    };
    this.decryptKey = this.decryptKey.bind(this);
  }
  checkToken(decryptedText) {
    console.log("decryptedText is:", decryptedText);
    if (decryptedText === KEY_PASS) {
      console.log("correct token");
      this.setState({
        textDetected: true,
        loading: false
      });
    } else {
      console.log("wrong token");
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
        console.log("responseJson", responseJson._bodyText);
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
    // console.log(encryption.encrypt(KEY_PASS));
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
          source={require("./Images/photos/1.jpg")}
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
