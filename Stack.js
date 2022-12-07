import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Post from "./Post" ;



class Stack extends Component{
    render(){
        return(
            <AppContainer />
        )
    }
}

const myStack = createStackNavigator({
    'Post' : Post,

}, {
    initialRouteName: 'Post'
});

const AppContainer = createAppContainer(myStack)

export default Stack;