import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function LoginBtn({
  onPress,
  children,
  className,
  isSignup,
  ...rest
}) {
  const color = isSignup ? "text-gray-800" : "text-white";
  return (
    <TouchableOpacity className={className} onPress={onPress} {...rest}>
      <Text className={`${color} text-base font-bold text-center`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
