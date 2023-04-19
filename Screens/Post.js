import { StyleSheet, View, TextInput, Button,Text } from "react-native";
import React from "react";
import { PHP_IP } from "../config/globalVar.js";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import SelectDropdown from 'react-native-select-dropdown'
import {axios} from 'axios';



export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "",categories:[], categorySelected: "",userID: ""};
  }

  insertPost = () => {
    if (!this.state.categorySelected || !this.state.content.length) {
      alert("Required Fields are missing");
    } else {
      var apiURL = "http://" + PHP_IP + "/Ycommunity-back-edition/request/post.php";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        "content": this.state.content,
        "userID": this.state.userID,
        "categoryID": this.state.categorySelected,
      };
      fetch(apiURL, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(Data),
      }).catch((error) => {
        alert("Error: " + error);
      });
    }
    this.props.navigation.navigate("SeePost");
  };
  getAllCategories = async()=>{
    const apiURL = "http://"+PHP_IP+"/Ycommunity-back-edition/request/category.php";
    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
    };
    try{
      const req = await fetch(apiURL,{
        method: "GET",
        headers})
    }catch(e){
      console.log(e)
    }
      console.log(req)
    const data = await req.json()
    this.setState({categories: data});
  }
  async searchPost(){

  }
  async componentDidMount()
  {
  fetch('http://'+PHP_IP+'/post')
  .then(response => response.json())
  .then((data) => {
    if(data==null)console.log("null")
    else console.log("not null")
  })
  .catch(error => console.error(error));
    await this.getAllCategories();
    this.setState({userID: 1})
    // this.setState({userID: await AsyncStorage.getItem("userID")})

  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.categories.map((category)=>category)}</Text>
        <SelectDropdown
          data={this.state.categories.map((category)=>category.name)}
          onSelect={(selectedItem,index)=>{
            this.setState({categorySelected: this.state.categories[index].id})
          }}
        >
        </SelectDropdown>
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
