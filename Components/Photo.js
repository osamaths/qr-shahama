import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Image from "react-native-scalable-image";
import Letter from "./Letter";

export default class Photo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: this.props.obj
    };
  }

  render() {
    const width = Dimensions.get("window").width;
    console.log("path is: ", width);
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={this.state.obj.path}
            style={{ borderRadius: 2 }}
            width={width * 0.95}
          />
        </View>
        <Letter text={this.state.obj.text} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 2,
    elevation: 10,
    borderColor: "silver"
  }
});
