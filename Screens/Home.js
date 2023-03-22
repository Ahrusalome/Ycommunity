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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={nftData}
            renderItem={({ item }) => <Card data={item} />}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View
            style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
