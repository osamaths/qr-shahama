/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { loadings } from "../src/Actions/Storage";
// source={{uri: 'https://cdn.dribbble.com/users/197348/screenshots/3424156/coeur-touchup.gif'}}

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={loadings[Math.floor(Math.random() * loadings.length)]}
          style={{ width: 200, height: 200 }}
        />

        <Text style={{ fontSize: 24 }}>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white"
  }
});
