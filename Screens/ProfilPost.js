import { StyleSheet, View, TextInput, Button,Text,ScrollView } from "react-native";
import React from "react";
import { PHP_IP } from "../config/globalVar.js";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import SelectDropdown from 'react-native-select-dropdown'
import axios from 'axios'
import { useRoute } from '@react-navigation/native';



export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {postID:"", userID: "",content:"",postInfo:[],commentPost:[]};
  }
  createComment = async() => {
    if (!this.state.content.length) {
      alert("Required Fields are missing");
    } else {
      const apiURL = "http://" + PHP_IP + "/comment";
      const Data = {
        "content": this.state.content,
        "authorID": this.state.userID,
        "postID": this.props.navigation.state.params.postID,
      };
      const req = await axios.post(apiURL,Data);
      const res = await req.data
      await this.getComment();
    }
  };
    getPostInfo = async()=>{
      // this func throw before getting the ID of post TO WATCH 
        const req = await axios.get("http://"+PHP_IP+"/post/"+this.state.postID)
        const res = await req.data
        this.setState({postInfo: res})
    }
    getComment = async()=>{
      const req = await axios.get("http://"+PHP_IP+"/comment/post/"+this.state.postID)
      const res = await req.data
      this.setState({commentPost: res})
    }
    async componentDidMount(){
      this.setState({postID: await this.props.navigation.state.params.postID})
      await this.getPostInfo();
      await this.getComment();
      this.setState({userID: 1})
    }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>

        <View style={styles.container}>
        {this.state.postInfo.map((post) => {
          return (
            <View  style={styles.container} key={post.id}>
              <Text>Username: {post.username}</Text>
              <Text>Message: {post.message}</Text>
              <Text>Likes: {post.likes}</Text>
            </View >
            );
            })}
            <TextInput
          placeholder={"Write your comment here"}
          placeholderTextColor={"black"}
          style={styles.inputText}
          onChangeText={(content) => this.setState({ content })}
        />
          <Button title={"Submit comment"} onPress={this.createComment} />
            {this.state.commentPost.map((comment)=>{
              return (
                <View  style={styles.comment} key={comment.id}>
                  <Text>From: {comment.username}</Text>
                  <Text>{comment.message}</Text>
                </View>
              )



            })}
          </View>
        </ScrollView>
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
    paddingBottom:0,
  },
  inputText: {
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  comment: {
    marginTop:25,
  },
});
