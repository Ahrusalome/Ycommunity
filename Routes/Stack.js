import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Register from "../Screens/Register.js";
import Home from "../Screens/Home.js";
import SeePost from "../Screens/SeePost" ;
import Post from "../Screens/Post"

export default class Stack extends React.Component {
  render() {
    return <AppContainer />;
  }
}
const myStack = createStackNavigator(
  {
    Home: Home,
    Register: Register,
    SeePost: SeePost,
    Post: Post,
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(myStack);
