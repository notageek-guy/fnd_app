import { View, Text, Image } from "react-native";
import { Link } from "expo-router";
import React from "react";
const staticImage = require("../assets/error.png");
export default function Error() {
  return (
    <View className="flex-1 items-center justify-center">
      <Image source={staticImage} className="h-[200] w-[200]" />
      <View className="mt-4">
        <Text className="text-2xl font-bold my-2">
          Oops! Something went wrong.
        </Text>
        <Link href="/" className="text-base text-indigo-500">
          Click here to go back to Home
        </Link>
      </View>
    </View>
  );
}
