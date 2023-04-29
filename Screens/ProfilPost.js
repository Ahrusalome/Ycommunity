import { StyleSheet, View, TextInput, Button,Text } from "react-native";
import React from "react";
import { PHP_IP } from "../config/globalVar.js";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import SelectDropdown from 'react-native-select-dropdown'
import axios from 'axios'
import { useRoute } from '@react-navigation/native';




export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { postID: "", userID: "",content:"",postInfo:[],commentPost:[]};
    this.setState({postID: this.props.navigation.state.params.postID})
    this.setState({userID: 1})
    this.getPostInfo();
  }
    createComment = async() => {
        if (!this.state.content.length) {
        alert("Required Fields are missing");
        } else {
        const apiURL = "http://" + PHP_IP + "/comment";
        const Data = {
            "content": this.state.content,
            "authorID": this.state.userID,
            "postID": this.state.postID,
        };
        const req = await axios.post(apiURL,Data);
        const res = await req.data
        }
        
    };
    getPostInfo = async()=>{
      // this func throw before getting the ID of post TO WATCH 
      console.log("http://"+PHP_IP+"/post/"+this.state.postID)
        const req = await axios.get("http://"+PHP_IP+"/post/"+this.state.postID)
        const res = await req.data
        this.setState({postInfo: res})
    }
    getComment = async()=>{
        const req = await axios.get("http://"+PHP_IP+"/comment/post/"+this.state.postID)
        const res = await req.data
        this.setState({commentPost: res})
    }
  render() {
    
    return (
      <View style={styles.container}>
        <View style={styles.container}>
        {this.state.postInfo.map((post) => {
          return (
            <View  style={styles.container} key={post.id} onPress={()=>this.goToComments(post.id)}>
              <Text>Username: {post.username}</Text>
              <Text>Message: {post.message}</Text>
              <Text>Likes: {post.likes}</Text>
              <Button
                title={"Delete Post"}
                onPress={() => this.deletePost(post.id)}
                />
            </View >
            );
            })}
        </View>
        <TextInput
          placeholder={"Write your comment here"}
          placeholderTextColor={"black"}
          style={styles.inputText}
          onChangeText={(content) => this.setState({ content })}
        />
        <Button title={"Submit comment"} onPress={this.createComment} />
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
