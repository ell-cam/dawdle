import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function Navbar({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image
          source={{ uri: "https://your-image-url.png" }}
          style={styles.logo}
        />
      </TouchableOpacity>
      <View style={styles.navLinks}>
        <TouchableOpacity onPress={() => navigation.navigate("Create")}>
          <Text style={styles.link}>Create User</Text>
        </TouchableOpacity>
        {/* Add more navigation links as needed */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#f0f0f0",
  },
  logo: {
    width: 100,
    height: 40,
  },
  navLinks: {
    flexDirection: "row",
  },
  link: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});