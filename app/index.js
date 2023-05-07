import { View, Text, TextInput, Image } from "react-native";
import React, { useState } from "react";
import GlobalSafe from "../components/GlobalSafe";
import Btn from "../utils/button";
import Header from "../components/Header";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import CustomSplash from "../components/CustomSplash";
export default function Home() {
  const [news, setNews] = useState("");
  const [isReady, setReady] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 3000);
  }, []);
  const router = useRouter();
  const handleClick = () => {
    router.push({
      pathname: "/details",
      params: { news },
    });
    setNews("");
  };

  if (!isReady) return <CustomSplash />;
  return (
    <GlobalSafe>
      <View className="flex-1  px-4 py-6 bg-white">
        <Header />
        <StatusBar style="auto" />
        <Image
          source={require("../assets/search.png")}
          className="w-60 h-60 mx-auto "
        />
        <View className=" p-4 mt-4 flex-col gap-4 w-full mx-auto">
          <TextInput
            placeholder="Enter the news"
            value={news}
            className="border py-3 px-3 rounded-md border-gray-300 text-gray-700"
            onChangeText={(text) => setNews(text)}
          />

          <Btn className="bg-indigo-500" onPress={() => handleClick()}>
            Verify News
          </Btn>
        </View>
        <View className="mt-4 p-4">
          <Text className="text-center font-bold text-base">
            How do we scan news?
          </Text>
        </View>
       
      </View>
    </GlobalSafe>
  );
}
