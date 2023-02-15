import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Button, Text } from "react-native";
import { RefreshControl } from "react-native";
import React from "react";
import { PHP_IP } from "../config/globalVar.js";

  

export default class SeePost extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {dataReceive: [],allCategories:[]};
        this.getAllPosts();
    }
    async getAllPosts(){
        const apiURL = "http://"+PHP_IP+"/Ycommunity-back-edition/getAllPost.php";
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        fetch(apiURL,headers)
        .then((response) => response.json())
        .then((data) => this.setState({dataReceive: data}));
    }
    
    async deletePost(postID){
        var data = {
            postID: postID,
          };
        fetch("http://"+PHP_IP+"/Ycommunity-back-edition/deletePost.php",{
            method: "POST",
            body: JSON.stringify(data),
        })
        this.props.navigation.navigate("Home")
        this.props.navigation.navigate("SeePost")
    }
    getAllCategories = async()=>{
        const apiURL = "http://"+PHP_IP+"/Ycommunity-back-edition/getAllCategory.php";
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        const req = await fetch(apiURL,headers)
        const data = await req.json()
        this.setState({allCategories: data});
    }
    getPostCategory= async(categoryID)=>{
        const apiURL = "http://"+PHP_IP+"/Ycommunity-back-edition/getAllPost.php";
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        };
        const Data = {
            "categoryID":categoryID,
        };
        const req = await fetch(apiURL, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data),
        })
        const data = await req.json()
        this.setState({dataReceive: data})
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




