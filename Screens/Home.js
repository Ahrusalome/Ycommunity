import { StyleSheet, Text, View } from "react-native";
import React, { Component } from "react";

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
          onPress={() => this.props.navigation.navigate("Login")}
        >
          Login
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 22,
  },
});
