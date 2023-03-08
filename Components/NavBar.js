import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Post from "../Screens/Post";
import Home from "../Screens/Home.js";
import Login from "../Screens/Login.js";
import SeePost from "../Screens/SeePost.js";




export default class NavBar extends React.Component {
    Tab = createMaterialBottomTabNavigator();
    Bde = () => {
        return (
        <Post />
        );
    }

    Clubs = () =>{
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>this page is Home</Text>
        </View>
        );
    }

    Home = () => {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>this page is Home</Text>
        </View>
        );
    }

    Messaging = () => {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>this page is Messaging</Text>
        </View>
        );
    }

    Projects = () => {
        return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>this page is Home</Text>
        </View>
        );
    }


    render(){
            return (
              <NavigationContainer>
                  <this.Tab.Navigator labeled={false} barStyle={{ backgroundColor: '#00fa43'}} activeColor="#ffffff">
                      <this.Tab.Screen name="Home" component={Post} 
                          options={{ 
                              tabBarIcon: ({ color, size }) => (
                                  <MaterialCommunityIcons name="home" color={color} size={26} />
                              ),
                          }}
                      />
                      <this.Tab.Screen name="Clubs" component={Login} 
                          options={{ 
                              tabBarIcon: ({ color, size }) => (
                                  <MaterialCommunityIcons name="home" color={color} size={26} />
                              ),
                          }}
                      />
                      <this.Tab.Screen name="Bde" component={SeePost} 
                          options={{ 
                              tabBarIcon: ({ color, size }) => (
                                  <MaterialCommunityIcons name="home" color={color} size={26} />
                              ),
                          }}
                      />
                      <this.Tab.Screen name="Projects" component={this.Projects} 
                          options={{ 
                              tabBarIcon: ({ color, size }) => (
                                  <MaterialCommunityIcons name="home" color={color} size={26} />
                              ),
                          }}
                      />
                  </this.Tab.Navigator>
              </NavigationContainer>
            );
          }
}
