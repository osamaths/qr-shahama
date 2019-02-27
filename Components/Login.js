import React, { Component } from "react";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
var t = require("tcomb-form-native");
var Form = t.form.Form;
import user from "../src/Actions/secret.json";
import { Actions } from "react-native-router-flux";

var Person = t.struct({
  username: t.String, // a required string
  password: t.String // a boolean
});

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    this._getFormOptions = this._getFormOptions.bind(this);
  }

  componentDidMount() {
    // give focus to the name textbox
    this.refs.form.getComponent("username").refs.input.focus();
  }

  onLoginSubmit() {
    if (
      this.refs.form.getComponent("username").refs.input.props.value ==
        user.username &&
      this.refs.form.getComponent("password").refs.input.props.value ==
        user.password
    ) {
      // Go to next page
      Actions.qr();
    }
  }
  _getFormOptions() {
    return {
      fields: {
        username: {
          auto: "none",
          placeholder: "Username",
          error: "Insert a username",
          returnKeyType: "next",
          autoFocus: true,
          onSubmitEditing: () => {
            this.refs.form.getComponent("password").refs.input.focus();
          }
        },
        password: {
          auto: "none",
          placeholder: "Password",
          error: "Password is required",
          secureTextEntry: true,
          onSubmitEditing: () => {
            this.onLoginSubmit();
          }
        }
      }
    };
  }
  render() {
    var options = this._getFormOptions();
    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Login</Text>
        <View style={styles.formContainer}>
          <Form ref="form" type={Person} options={options} />
          <TouchableHighlight
            style={styles.btn}
            onPress={() => this.onLoginSubmit()}
            underlayColor="blue"
          >
            <Text style={{ color: "white" }}>Save</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center"
  },
  formContainer: {
    justifyContent: "center",
    alignSelf: "center",
    padding: 20
  },
  btn: {
    backgroundColor: "#009688",
    width: 300,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center"
  },
  pageTitle: {
    alignSelf: "center",
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 50
  }
});
