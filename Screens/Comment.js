import { StyleSheet, View, TextInput, Button,Text } from "react-native";
import React from "react";
import { PHP_IP } from "../config/globalVar.js";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import SelectDropdown from 'react-native-select-dropdown'
import axios from 'axios'



export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "",userID: ""};
  }

  createComment = async() => {
    if (!this.state.content.length) {
      alert("Required Fields are missing");
    } else {
      const apiURL = "http://" + PHP_IP + "/comment";
      const Data = {
        "content": this.state.content,
        "authorID": this.state.userID,
        "postID": 16,
      };
      const req = await axios.post(apiURL,Data);
      const res = await req.data
      console.log(res)
      this.props.navigation.navigate("SeePost");
    }
  };
  async searchPost(){

  }
  async componentDidMount()
  {
    this.setState({userID: 1})
    // this.setState({userID: await AsyncStorage.getItem("userID")})

  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder={"Content of the Post"}
          placeholderTextColor={"black"}
          style={styles.inputText}
          onChangeText={(content) => this.setState({ content })}
        />
        <Button title={"Submit"} onPress={this.createComment} />
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
