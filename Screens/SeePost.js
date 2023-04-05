import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import { RefreshControl } from "react-native";
import React from "react";
import { PHP_IP } from "../config/globalVar.js";
import axios from "axios";

  

export default class SeePost extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {dataReceive: [],allCategories:[]};
        this.getAllPosts();
    }
    async getAllPosts(){
        const apiURL = "http://"+PHP_IP+"/post";
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        const req = await axios.get(apiURL);
        const res = await req.data
        this.setState({dataReceive: res})
    }
    
    async deletePost(postID){
        var data = {
            postID: postID,
          };
          const req = await axios.delete("http://"+PHP_IP+"/post",data)
          const res = await req.data
          console.log(res)
        this.props.navigation.navigate("Home")
        this.props.navigation.navigate("SeePost")
    }
    getAllCategories = async()=>{
        const apiURL = "http://"+PHP_IP+"/category";
        const req = await axios.get(apiURL);
        const res = await req.data
        this.setState({allCategories: res});
    }
    getPostCategory= async(categoryID)=>{
        const apiURL = "http://"+PHP_IP+"/post/category/" + categoryID;
        const req = await axios.get(apiURL);
        const res = await req.data;

        this.setState({dataReceive: res})
    }
    async componentDidMount()
  {
    this.getAllCategories();
    this.getAllPosts();
  }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.filter}>
                    {this.state.allCategories.map((category)=>{
                        return(
                            <View key={category.id}>
                                <Button title={category.name} onPress={()=>this.getPostCategory(category.id)} />
                            </View>
                        )
                    })}
                </View>


                <View style={styles.container}>
                {this.state.dataReceive.map((post)=>{
                    return(
                        <View style={styles.container} key={post.id}>
                            <Text>Username:     {post.username}</Text>
                            <Text>Message:     {post.message}</Text>
                            <Text>Likes:      {post.likes}</Text>
                            <Text>Category ID To remove:   {post.categoryID}</Text>
                            <Button title={"Delete Post"} onPress={()=>this.deletePost(post.id)} />
                        </View>
                    )
                })}</View>
                
            </View>
        )
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
  filter:{
    flex: 1,
    backgroundColor: "#fff",
    height:250,
  },
});




