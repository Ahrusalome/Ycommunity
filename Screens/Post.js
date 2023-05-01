import { StyleSheet, View, TextInput, Button,Text } from "react-native";
import React from "react";
import { PHP_IP } from "../config/globalVar.js";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import SelectDropdown from 'react-native-select-dropdown'
import axios from 'axios'



export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "",categories:[], categorySelected: "",userID: ""};
  }

  insertPost = async() => {
    if (!this.state.categorySelected || !this.state.content.length) {
      alert("Required Fields are missing");
    } else {
      const apiURL = "http://" + PHP_IP + "/post";
      const Data = {
        "content": this.state.content,
        "userID": this.state.userID,
        "categoryID": this.state.categorySelected,
      };
      const req = await axios.post(apiURL,Data);
      const res = await req.data
      this.props.navigation.navigate("SeePost");
    }
  };
  getAllCategories = async()=>{
    const apiURL = "http://"+PHP_IP+"/category";
    const req = await axios.get("http://"+PHP_IP+"/category")
    const data = await req.data
    this.setState({categories: data});
  }
  async searchPost(){

  }
  async componentDidMount()
  {
    await this.getAllCategories();
    this.setState({userID: 1})
    // this.setState({userID: await AsyncStorage.getItem("userID")})

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
