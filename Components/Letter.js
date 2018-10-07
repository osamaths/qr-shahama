import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const WORDS = "ما مكني فيه ربي خير";
// "With your fonts embedded and referenced it’s a simple case of adding them to your React Native styles. Simply add a fontFamily property with your font name:";
export default class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>{"You are My Love"}</Text>
        <Text style={styles.centerText}>{WORDS}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    fontSize: 30,
    padding: 10,
    color: "peru",
    fontFamily: "DIVANMAZ"
    // fontWeight: "600"
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
