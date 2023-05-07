import { View, Text, Image, Animated, Easing } from "react-native";
import React, { useState, useEffect } from "react";

const staticImage = require("../assets/checker.png");

export default function CustomSplash() {
  const [fadeAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    const animateOut = () => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 600,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start();
    };

    const timeout = setTimeout(animateOut, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [fadeAnim]);

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        },
        { opacity: fadeAnim },
      ]}
    >
      <Image source={staticImage} style={{ width: 200, height: 200 }} />
      <Text className="text-2xl font-bold">Fake News Detection App</Text>
      <Text className="text-base ">Powered by AI and Machine Learning</Text>
    </Animated.View>
  );
}
