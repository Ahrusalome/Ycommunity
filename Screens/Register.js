import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { Component } from "react";

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  InsertRecord = () => {
    var username = this.state.username;
    var email = this.state.email;
    var password = this.state.password;
    var passwordConf = this.state.passwordConf;
    if (
      username.length == 0 ||
      email.length == 0 ||
      password.length == 0 ||
      password != passwordConf
    ) {
      alert("Required Field is missing");
    } else {
      var apiURL = "http://localhost/register.php";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        username: username,
        email: email,
        password: password,
      };

      fetch(apiURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      })
        .then((response) => response.json())
        .then((response) => {
          alert(response[0].State);
        })
        .catch((error) => {
          alert("Error: " + error);
        });
    }
  };

  render(
    IsEmailValid = () => {
      var email = this.state.email;
      var emailPattern = /^[a-zA-Z]+\.[a-zA-Z]+@ynov\.com$/;
      if (emailPattern.test(email)) {
        return true;
      }
      return false;
    }
  ) {
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
          placeholder={"email (ex: prenom.nom@ynov.com)"}
          placeholderTextColor={"black"}
          style={
            IsEmailValid() == true
              ? styles.emailInputValid
              : styles.emailInputInvalid
          }
          onChangeText={(email) => this.setState({ email })}
          autoCapitalize="none"
          textContentType={"emailAddress"}
        />
        <TextInput
          placeholder={"password"}
          placeholderTextColor={"black"}
          style={styles.inputText}
          onChangeText={(password) => this.setState({ password })}
          textContentType={"newPassword"}
          secureTextEntry={true}
        />
        <TextInput
          placeholder={"password confirmation"}
          placeholderTextColor={"black"}
          style={styles.inputText}
          onChangeText={(passwordConf) => this.setState({ passwordConf })}
          textContentType={"newPassword"}
          autoCapitalize="none"
          secureTextEntry={true}
        />
        <Button title={"Submit"} onPress={this.InsertRecord} />
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
  emailInputValid: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginTop: 30,
    color: "green",
  },
  emailInputInvalid: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
    marginTop: 30,
    color: "red",
  },
});
