import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import React from "react";

export default class SeePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataReceive: [] };
  }
  getAllPosts() {
    const apiURL = "http://10.44.17.234/getAllPost.php";
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => this.setState({ dataReceive: data }));
  }
  render() {
    this.getAllPosts();
    return (
      <View style={styles.container}>
        {this.state.dataReceive.map((post) => {
          return (
            <View style={styles.container}>
              <Text>Username: {post.username}</Text>
              <Text>Message: {post.message}</Text>
              <Text>Likes: {post.likes}</Text>
            </View>
          );
        })}
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
