import { StyleSheet, View, TextInput, Button, RefreshControl, Text,TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { PHP_IP } from "../config/globalVar.js";
import axios from "axios";
import SelectDropdown from 'react-native-select-dropdown'


export default class SeePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [],categories: [],categorySelected:"",havePosts: true,userID:1,refresh: false};
  }

  async getAllPosts() {
    this.setState({refresh: true})
    await this.getAllLikes();
    const apiURL = "http://" + PHP_IP + "/post";
    const req = await axios.get(apiURL)
    const res = await req.data
    if(res.length>0)this.setState({havePosts: true})
    else this.setState({havePosts: false})
    // adding a field in these object for the like button
    res.forEach(post => {
      post.isLiked= false
    });
    this.setState({posts: await res})
    await this.getAllLikes();
    this.setState({refresh : false})
  }
  async getAllLikes(){
    const req = await axios.get("http://"+PHP_IP+"/like/user/"+this.state.userID)
    const res = await req.data
    const subPost = []
    this.state.posts.forEach((post,index) => {
      subPost.push(post)
      if(res.length>0 && Array.isArray(res)){
        res.forEach(like => {
          if(like.postID==post.id)subPost[index].isLiked=true;
        });
      }
      this.setState({posts: subPost})
    });
  }

  async deletePost(postID) {
    const req = await axios.delete("http://" + PHP_IP + "/post/" + postID)
    const res = await req.data;
    this.getAllPosts();
  }

  async goToComments(postID){
    this.props.navigation.navigate("ProfilPost",{"postID":postID});
  }

  async goToCreationPost(){
    this.props.navigation.navigate("Post");
  }

  async getAllCategories (){
    const apiURL = "http://"+PHP_IP+"/category";
    const req = await axios.get(apiURL)
    const res = await req.data
    res.push({id: 0,name: "No filter"})
    this.setState({categories: res});
  }

  async applyFilter(){


    let urlToFetch;
    if(this.state.categorySelected!=0)urlToFetch = "http://"+PHP_IP+"/post/category/"+this.state.categorySelected
    else urlToFetch = "http://"+PHP_IP+"/post"

    const req = await axios.get(urlToFetch)
    const res = await req.data
    if(res.length>0)this.setState({havePosts: true})
    else this.setState({havePosts: false})
    this.setState({posts: await res})

  }

  async likePost(postID){
    const req = await axios.post("http://"+PHP_IP+"/like",{
      "userID": this.state.userID,
      "postID": postID,
    })
    const res = await req.data
    const reqUpdatePostLike = await axios.put("http://"+PHP_IP+"/post/addLike/"+postID)
    const resUpdate = await reqUpdatePostLike.data
    console.log(resUpdate)
    await this.getAllPosts();
  }
  async unLike(postID){
    console.log("http://"+PHP_IP+"/post/removeLike/"+postID)
    const req = await axios.delete("http://"+PHP_IP+"/like/"+this.state.userID+"/"+postID)
    const res = await req.data
    const reqUpdatePostLike = await axios.put("http://"+PHP_IP+"/post/removeLike/"+postID)
    const resUpdate = await reqUpdatePostLike.data
    await this.getAllPosts();
  }

  async componentDidMount(){
    console.log(this.props.navigation)
    await this.getAllCategories();
    await this.getAllPosts();
  }
  async enableRefresh(){
    return this.state.refresh
  }
  render() {
    return (
      <ScrollView style={styles.container}
      refreshControl={
        <RefreshControl refreshing={this.state.refresh} onRefresh={async()=>await this.getAllPosts()}/>
      }
      >
        <SelectDropdown
        data={this.state.categories.map(category=> category.name)}
          onSelect={(selectItem,index)=>{
            this.setState({categorySelected: this.state.categories[index].id})
            this.applyFilter();
          }}>
        </SelectDropdown>
        {this.state.posts.length>0 && 
        this.state.posts.map((post) => {
          return (
            <TouchableOpacity  style={styles.container} key={post.id} onPress={()=>this.goToComments(post.id)}>
              <Text>Username: {post.username}</Text>
              <Text>Message: {post.message}</Text>
              <Text>Likes: {post.likes}</Text>

              {!post.isLiked?
              <Button
              title={"Like"}
              onPress={() => this.likePost(post.id)}
            /> : 
            <Button
              title={"UnLike"}
              onPress={() => this.unLike(post.id)}
            />
              }




              <Button
                title={"Delete Post"}
                onPress={() => this.deletePost(post.id)}
              />
            </TouchableOpacity >
          );
        })
        }
        {this.state.posts.length<1 && 
          <View>
          <Text>They are no post in this category yet</Text>
          <Button title={"Create a new post"} onPress={()=>this.goToCreationPost()} />
          </View>
        }
      </ScrollView>
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