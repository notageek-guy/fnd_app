import { View, Text } from "react-native";
import React from "react";
import { BarIndicator } from "react-native-indicators";
export default function Loader() {
  return (
    <View className="flex-1 items-center justify-center">
      <BarIndicator
      color='#7630ff'
        style={{
          width: 100,
          height: 100,
        }}
      />
    </View>
  );
}
