import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FactTrack</Text>
      <Text style={styles.subheading}>Get the facts, not the fake news.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a1a",
  },
  subheading: {
    fontSize: 18,
    color: "#777",
  },
});

export default Header;
