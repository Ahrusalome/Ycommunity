import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
  Button,
} from "react-native";
import React from "react";
import { Navigate } from "react-router-dom";
import {Routes, Route, useNavigate} from 'react-router-dom';
import Register from "./Register"

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", content: "", userID: ""};
  }

  insertPost = () => {
    var username = this.state.username;
    var content = this.state.content;
    var userID = this.state.userID;

    if (
      username.length == 0 ||
      content.length == 0 
    ) {
      alert("Required Field is missing");
    } else {
      userID = 1;
      var apiURL = "http://172.25.38.159/Ycommunity-back-edition/post.php";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        username: username,
        content: content,
        userID: userID,
      };
      fetch(apiURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
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
          placeholder={"username of the writer"}
          placeholderTextColor={"black"}
          style={styles.inputText}
          onChangeText={(username) => this.setState({ username })}
          textContentType={"username"}
        />
        <TextInput
          placeholder={"Content of the Post"}
          placeholderTextColor={"black"}
          style={styles.inputText}
          onChangeText={(content) => this.setState({ content })}
        />
        <Button title={"Submit"} onPress={this.insertPost} />
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

export default Post;
