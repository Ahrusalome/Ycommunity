import { StyleSheet, View, TextInput, Button } from "react-native";
import React from "react";
import { PHP_IP } from "../config/globalVar.js";
import { AsyncStorage } from "react-native";
import SelectDropdown from 'react-native-select-dropdown'



export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "",categories:[], categorySelected: "",userID: ""};
  }

  insertPost = () => {
    var content = this.state.content;
    var userID = this.state.userID;

    if (!this.state.categorySelected || !this.state.content.length) {
      alert("Required Field is missing");
    } else {
      var apiURL = "http://" + PHP_IP + "/Ycommunity-back-edition/post.php";
      var headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
      };
      var Data = {
        "content": content,
        "userID": userID,
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
    const apiURL = "http://"+PHP_IP+"/Ycommunity-back-edition/getAllCategory.php";
    const headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
    };
    const req = await fetch(apiURL,headers)
    const data = await req.json()
    this.setState({categories: data});
  }
  async searchPost(){

  }
  async componentDidMount()
  {
    this.getAllCategories();
    this.setState({userID: await AsyncStorage.getItem("userID")})
  }
  render() {
    return (
      <View style={styles.container}>
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
