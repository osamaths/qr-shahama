import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Image from "react-native-scalable-image";

export default class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      path: this.props.path
    };
  }

  render() {
    const width = Dimensions.get("window").width;
    console.log("path is: ", width);
    return (
      <View style={styles.container}>
        <Image
          source={this.state.path}
          style={{ borderRadius: 5 }}
          width={width * 0.95}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 5,
    elevation: 10,
    borderColor: "silver",
    marginVertical: 10
  }
});
