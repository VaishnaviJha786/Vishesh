import React, { Component } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from "react-native";

const home = ({ navigation }) => {
  return (
    <>
    <ImageBackground
      style={styles.background}
      source={require("../assets/bg1.jpeg")}
    >
      <View style={styles.container}>
        <Text style={styles.vishesh}>Vishesh</Text>
        <Text style={styles.vishesh2}>for the differently abled</Text>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.text} onPress={() => navigation.navigate("Login")}>Next</Text>
      </TouchableOpacity>
    </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  vishesh: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    alignContent: "center",
    bottom: 200,
  },
  vishesh2: {
    fontSize: 20,
    color: "black",
    alignContent: "center",
    bottom: 190,
    paddingLeft: 20,
  },
  container: {
    flex: 1,
    top: "30%",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    width: 150,
    height: 50,
    bottom: 180,
    backgroundColor: "rgba(0,0,0,0)",
    borderWidth: 1,
    borderColor: "black",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    paddingTop: 10,
    color: "black",
  },
});
export default home;
