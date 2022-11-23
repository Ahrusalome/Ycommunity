import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableWithoutFeedback } from "react-native";
import React from "react";

export default class App extends React.Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={this.login}>
        <View style={styles.container}>
          <Text>PORC NOOOOOOOOOOO</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  login = () => {
    console.log("begin of login")
    fetch("http://172.20.21.105/Ycommunity-back-edition/test.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: "message",
      }),
    })
    .catch((error)=>{
      console.log("tamere")
      console.log("\n" + error)
    })
      .then((response) => response.json())
      .then((res) => {
        alert(res.message);
      })
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
