import { StatusBar } from 'expo-status-bar';
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native';
import React, { useState } from "react";

export default function App() {
  const [createForm, setCreateForm] = useState(false);
  return (
    <View style={styles.container}>
      <Modal 
      transparent={true}
      visible={createForm}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setCreateForm(!createForm);
      }}>
      <View style={styles.modalView}>
      <Text style={styles.modalText}>Add a post</Text>
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() => setCreateForm(!createForm)}>
          <Text style={styles.textStyle}>hide</Text>
      </Pressable>
      </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setCreateForm(true)}>
          <Text style={styles.textStyle}>Add a post</Text>
        </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
