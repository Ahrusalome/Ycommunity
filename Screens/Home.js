import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import NavBar from "../Components/NavBar.js";

export default class Home extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.textStyle}>Home</Text>
        <Text
          style={styles.textStyle}
          onPress={() => this.props.navigation.navigate("Register")}
        >
          Register
        </Text>
        <Text
          style={styles.textStyle}
          onPress={() => AsyncStorage.removeItem("userID")}
        > 
          LogOut
        </Text>
        <Text
          style={styles.textStyle}
          onPress={() => this.props.navigation.navigate("Login")}
        >
          Login
        </Text>
        <Text
          style={styles.textStyle}
          onPress={() => this.props.navigation.navigate("Post")}
        >
          Post
        </Text>
        <Text
          style={styles.textStyle}
          onPress={() => this.props.navigation.navigate("SeePost")}
        >
          SeePost
        </Text>
        <Text
          style={styles.textStyle}
          onPress={() => this.props.navigation.navigate("NavBar")}
        >
          NavBar
        </Text>
        <Text
          style={styles.textStyle}
          onPress={() => this.props.navigation.navigate("Comment")}
        >
          Comment
        </Text>
       < NavBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
  },
});
