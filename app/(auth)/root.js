import { View, Text, SafeAreaView, Image } from "react-native";
import LoginBtn from "../../utils/loginBtn";
import { useRouter } from "expo-router";

const staticImage = require("../../assets/finder.png");
export default function RootLogin() {
  const router = useRouter();
  const goToLogin = () => router.push("(auth)/login");
  const goToSignup = () => router.push("(auth)/signup");
  return (
    <SafeAreaView className="flex-1 mt-4">
      <View className="flex-1 gap-5 px-5 py-6 bg-white">
        <View>
          <Image source={staticImage} className="w-52 h-52 mx-auto" />
        </View>
        <View classname="flex-1 mt-4">
          <Text className="text-center my-4 text-3xl font-extrabold text-indigo-700 ">
            Verify your news with
          </Text>
          <Text className="text-3xl font-extrabold text-center text-indigo-700">
            {" "}
            FactTrack
          </Text>
          <Text className="text-base mt-2 text-gray-800 text-center">
            Fighting fake news with AI and machine learning - Your trusted news
            source
          </Text>
        </View>
        <View className=" items-center mt-4 justify-center gap-4 w-full flex-row">
          <LoginBtn
            className={"bg-indigo-700 px-5 py-4 shadow-md rounded-md w-[40%]"}
            onPress={goToLogin}
          >
            Login
          </LoginBtn>

          <LoginBtn
            onPress={goToSignup}
            isSignup
            className={"rounded-md bg-slate-100 px-6 py-4  w-[40%]"}
          >
            Signup
          </LoginBtn>
        </View>
      </View>
    </SafeAreaView>
  );
}
