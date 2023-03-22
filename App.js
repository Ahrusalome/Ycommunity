import React from "react";

import Bde from "./NavBar/bde";
import Home from "./NavBar/home";
import Clubs from "./NavBar/clubs";
import Projects from "./NavBar/project";
import Messaging from "./NavBar/messaging";

import  { createmMaterialBottomTabNavigator } from '@react-navigation/material-botom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createmMaterialBottomTabNavigator();

 
export default function BottomNavBar() {
  return (
    <NavigationContainer>
        <Tab.Navigator labeled={false} barStyle={{ backgroundColor: '#color'}} activeColor="#white">
            <Tab.Screen name="Home" component={Home} 
                options={{ 
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="Home" component={Messaging} 
                options={{ 
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="Home" component={Clubs} 
                options={{ 
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="Home" component={Bde} 
                options={{ 
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="Home" component={Projects} 
                options={{ 
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
} 