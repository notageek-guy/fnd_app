import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Btn({ children, onPress, className, ...rest }) {
  return (
    <TouchableOpacity
      className={`px-6 py-3 rounded-md ${className}`}
      onPress={onPress}
      {...rest}
    >
      <Text className="text-white font-bold text-center">{children}</Text>
    </TouchableOpacity>
  );
}


