import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import React from "react";
import { PHP_IP } from "../config/globalVar.js";
import axios from "axios";

export default class SeePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataReceive: [] };
    this.getAllPosts();
  }
  async getAllPosts() {
    const apiURL = "http://" + PHP_IP + "/post";
    const req = await axios.get(apiURL)
    const res = await req.data
    this.setState({dataReceive: await res})
  }
  async deletePost(postID) {
    const req = await axios.delete("http://" + PHP_IP + "/post/" + postID)
    const res = await req.data;
    console.log(res)
    this.props.navigation.navigate("Home");
    this.props.navigation.navigate("SeePost");
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.dataReceive.map((post) => {
          return (
            <View style={styles.container} key={post.id}>
              <Text>Username: {post.username}</Text>
              <Text>Message: {post.message}</Text>
              <Text>Likes: {post.likes}</Text>
              <Button
                title={"Delete Post"}
                onPress={() => this.deletePost(post.id)}
              />
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