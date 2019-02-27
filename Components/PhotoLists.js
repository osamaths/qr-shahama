import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Photo from "./Photo";
import { images } from "../src/Actions/Storage";

export default class PhotoLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentDidMount() {
    this.setState({ photos: images });
  }
  _renderPhotos() {
    if (this.state.photos.length) {
      console.log("photos length is: ", this.state.photos.length);

      return (
        <View style={styles.container}>
          {this.state.photos.map((obj, index) => (
            <Photo obj={obj} key={index} />
          ))}
        </View>
      );
    } else {
      return (
        <View>
          <Text>No data here.</Text>
        </View>
      );
    }
  }
  render() {
    return <View>{this._renderPhotos()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5
  }
});
