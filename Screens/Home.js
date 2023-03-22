import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";
import { AsyncStorage } from "react-native";

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
          onPress={() =>
            AsyncStorage.getItem("userID", (err, result) => {
              alert(result);
            })
          }
        >
          Test
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
      </View>
    );

    if (filteredData.length === 0) {
      setNftData(NFTData);
    } else {
      setNftData(filteredData);
    }
  };
};

export default Home;
