import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const WORDS = "شهد يا حبيبة قلبي";
// "With your fonts embedded and referenced it’s a simple case of adding them to your React Native styles. Simply add a fontFamily property with your font name:";
export default class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WORDS: this.props.text
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={styles.centerText}>{this.state.WORDS}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerText: {
    fontSize: 27,
    color: "peru",
    fontFamily: "Souria-Free",
    marginBottom: 50
  }
});
