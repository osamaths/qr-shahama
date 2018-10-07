import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const WORDS =
  "الخطوط متاحة للتحميل لا يعني أنها مجانية حتما، المرجو التحقق من التراخيص أنها مجانية حتما، المرجو التحقق من التراخيص أنها مجانية حتما، المرجو التحقق من التراخيص عبر صفحة تفاصيل الخط أو من خلال غوغل.";
// "With your fonts embedded and referenced it’s a simple case of adding them to your React Native styles. Simply add a fontFamily property with your font name:";
export default class Letter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>{"شهد"}</Text>
        <Text style={styles.centerText}>{WORDS}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    alignSelf: "center",
    color: "gold",
    marginVertical: 10,
    paddingTop: 30,
    fontFamily: "samt-7017",
    lineHeight: 50
    // backgroundColor: "green"
  },
  centerText: {
    fontSize: 30,
    paddingHorizontal: 10,
    color: "peru",
    fontFamily: "DIVANMAZ",
    lineHeight: 50,
    textAlign: "right"
    // backgroundColor: "white"
  }
});
