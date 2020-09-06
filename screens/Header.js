import React from "react";
import { StyleSheet, Text, View } from "react-native";
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>SCHEMES</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "#ffb6c1",
  },
  title: {
    textAlign: "center",
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});