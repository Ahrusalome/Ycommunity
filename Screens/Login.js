import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { Component } from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }
  LogIn = () => {
    var username = this.state.username;
    var password = this.state.password;
    if (username.length == 0 || password.length == 0) {
      alert("Required Field is missing");
    } else {
      var apiURL = "http://10.44.17.234/login.php";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        username: username,
        password: password,
      };
      fetch(apiURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response == "true") {
            alert("you are now connected, please don't be racist");
            this.props.navigation.navigate("Home");
          }
        })
        .catch((error) => {
          alert("Error: " + error);
        });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={"username"}
          placeholderTextColor={"black"}
          style={styles.inputText}
          onChangeText={(username) => this.setState({ username })}
          textContentType={"username"}
        />
        <TextInput
          placeholder={"password"}
          placeholderTextColor={"black"}
          style={styles.inputText}
          onChangeText={(password) => this.setState({ password })}
          textContentType={"Password"}
          secureTextEntry={true}
        />
        <Button title={"Submit"} onPress={this.LogIn} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 10,
  },
  inputText: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginTop: 30,
  },
});
