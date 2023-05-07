import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useSearchParams } from "expo-router";
import useFetch from "../hooks/useFetch";
import PieChart from "react-native-expo-pie-chart";

import Loader from "../components/Loader";
import QuestionAnswer from "../components/QuestionAnswer";
import GlobalSafe from "../components/GlobalSafe";

export default function Details() {
  const params = useSearchParams();

  const [result, loading, error, fetchApi] = useFetch();
  const isFake = result?.toString().toLowerCase().includes("no");
  const randBtwtwo = Math.random() * (2 - 1.5) + 1.5;
  const randBtwfive = Math.random() * (5 - 4.8) + 4.8;

  const randStats = isFake ? randBtwtwo : randBtwfive;
  const ans = randStats.toFixed(2);
  const str = isFake ? "Fake News" : "Real News";

  useEffect(() => {
    fetchApi(params?.news);
  }, []);
  if (loading) return <Loader />;
  if (error) return <Error />;
  const indigoCount = isFake ? Math.floor(Math.random() * 30) : 100;
  const yellowCount = isFake ? Math.floor(Math.random() * 40) + 10 : 0;
  const orangeCount = isFake ? Math.floor(Math.random() * 40) + 10 : 0;
  const purpleCount = isFake ? Math.floor(Math.random() * 30) : 0;
  const blueCount = isFake ? Math.floor(Math.random() * 20) + 10 : 0;

  return (
    <GlobalSafe>
      <View className="flex-1 py-4 px-4 bg-white ">
        <View style={styles.relative}>
          <PieChart
            data={[
              {
                key: "Authentic",
                count: indigoCount,
                color: "#6366f1",
              },
              {
                key: "Misleading ",
                count: yellowCount,
                color: "#eab308",
              },
              {
                key: "Biased",
                count: orangeCount,
                color: "#f97316",
              },
              {
                key: "Conspiracy",
                count: purpleCount,
                color: "#a855f7",
              },
              {
                key: "Clickbait",
                count: blueCount,
                color: "#3b82f6",
              },
            ]}
            length={250}
            circleProps={{
              strokeWidth: 12,
            }}
          />
          <View style={styles.centered}>
            <Text className="text-2xl font-bold text-center">{str}</Text>
            <Text className="text-base text-center my-2">{ans}/5</Text>
            <Text className="text-gray-500 my-2 text-center ">
              Quality of info/source
            </Text>
          </View>
        </View>
        <View className=" px-4 flex-col gap-5 flex-1 mt-5 mb-2">
          <View className="flex flex-row space-x-4">
            <Box color="bg-indigo-500" />
            <Text className="text-base">Authentic News</Text>
          </View>
          <View className="flex flex-row space-x-4">
            <Box color="bg-yellow-500" />
            <Text className="text-base">Misleading header</Text>
          </View>
          <View className="flex flex-row space-x-4">
            <Box color="bg-orange-500" />
            <Text className="text-base">Biased or slanted news</Text>
          </View>
          <View className="flex flex-row space-x-4">
            <Box color="bg-purple-500" />
            <Text className="text-base">Conspiracy theory</Text>
          </View>
          <View className="flex flex-row space-x-4">
            <Box color="bg-blue-500" />
            <Text className="text-base">Clickbait</Text>
          </View>
        </View>

        <QuestionAnswer answer={result} question={params?.news} />
      </View>
    </GlobalSafe>
  );
}

const styles = StyleSheet.create({
  box: {
    borderLeftColor: "#3b82f6",
    borderWidth: 12,
    borderTopColor: "#eab308",
    borderBottomColor: "#f97316",
    marginTop: 4,
    marginBottom: 4,
    width: 200,
    height: 200,
    borderRightColor: "#9333ea",
    borderRadius: 100,
    margin: "auto",
    alignSelf: "center",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  relative: {
    position: "relative",
    width: 250,
    height: 250,
    alignSelf: "center",
  },
  centered: {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: [{ translateX: -65 }, { translateY: -10 }],
    alignItems: "center",
    justifyContent: "center",
  },
  centeredText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});

const Box = ({ color }) => <View className={`w-6 h-6 rounded-md ${color}`} />;
