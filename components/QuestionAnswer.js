import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ReadMore from "@fawazahmed/react-native-read-more";

export default function QuestionAnswer({ question, answer }) {
  return (
    <View style={styles.container}>
      <View className="shadow-lg p-4 bg-indigo-500  rounded-md">
        <Text style={styles.question} className="text-white font-bold">
          Question: {question} ?
        </Text>
      </View>
      <View className="mt-4 p-4 bg-white rounded-md shadow-lg  ">
        <ReadMore
          numberOfLines={3}
          style={styles.textSize}
          seeMoreStyle={styles.seeMoreStyle}
          seeLessStyle={styles.seeLessStyle}
        >
          Result: {answer}
        </ReadMore>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  question: {
    fontSize: 18,
    marginBottom: 8,
  },
  answer: {
    fontSize: 16,
    color: "#555",
  },
  textSize: { fontSize: 16, color: "#333" },
  seeMoreStyle: {
    color: "black",
    fontWeight: "bold",
  },
  seeLessStyle: {
    color: "black",
    fontWeight: "bold",
  },
});
