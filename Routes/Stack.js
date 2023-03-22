import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Register from "../Screens/Register.js";
import Home from "../Screens/Home.js";
import Login from "../Screens/Login.js";
import Post from "../Screens/Post.js";
import SeePost from "../Screens/SeePost.js";
import NavBar from "../Components/NavBar.js";

export default class Stack extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const myStack = createStackNavigator(
  {
    Home: Home,
    Register: Register,
    Login: Login,
    Post: Post,
    SeePost: SeePost,
    NavBar:NavBar,
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(myStack);
