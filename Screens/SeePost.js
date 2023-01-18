import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TextInput,
  Button,
} from "react-native";
import React from "react";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.getPost();
  }

  getPost = async () => {
    const request = await fetch(
      "http://172.25.39.151/Ycommunity-back-edition/getAllPost.php"
    );
    const data = await request.json();
    this.setState({ data: data });
  };
  deletePost = async (postID) => {
    var Data = {
      postID: postID,
    };
    var headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const request = await fetch(
      "http://172.25.39.151/Ycommunity-back-edition/deletePost.php",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      }
    );

    this.setState({
      data: this.state.data.filter((post) => post.id != postID),
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.data.map((post) => {
          return (
            <View key={post.id}>
              <Text>Username {post.username}</Text>
              <Text>Message {post.message}</Text>
              <Button
                onPress={() => this.deletePost(post.id)}
                title={"Delete post"}
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

export default Post;
