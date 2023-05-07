import { Link } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Alert,
} from "react-native";
import { useAuth } from "../../context/auth";
import LoginBtn from "../../utils/loginBtn";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useEffect, useState } from "react";
import { auth } from "../../utils/firebase";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { setAuth } = useAuth();
  const handleEmail = (email) => setEmail(email);
  const handlePass = (pass) => setPass(pass);
  const handleSubmit = async () => {
    try {
      if (pass && email) {
        const res = await createUserWithEmailAndPassword(auth, email, pass);
        console.log(res);
      } else {
        Alert.alert("Fill the Input Field");
      }
    } catch (error) {
      console.log("error happened", error);
    }
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setAuth(user);
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 ">
      <View className="px-4 flex-1 mt-4 py-6 items-center justify-center">
        <View className="">
          <Text className="text-2xl font-bold  text-center text-indigo-700  ">
            Create User
          </Text>
          <Text className="text-center  text-base mt-4 font-bold">
            Welcome back you've been missed
          </Text>
        </View>
      </View>
      <View className="flex-1 mb-4 px-4">
        <View style={styles.container}>
          <TextInput
            placeholder="Email"
            className="py-3 rounded-md"
            value={email}
            onChangeText={(text) => handleEmail(text)}
          />
        </View>
        <View style={styles.container}>
          <TextInput
            className="py-3 rounded-md px-4 "
            value={pass}
            onChangeText={(text) => handlePass(text)}
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <Link
          className="my-4 self-end text-indigo-700 text-base font-bold"
          href="/"
        >
          Already logged in?
        </Link>
        <LoginBtn
          className="bg-indigo-700 py-3 rounded-md"
          onPress={handleSubmit}
        >
          Create
        </LoginBtn>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logo: { width: "70%", maxWidth: 500, maxHeight: 200 },
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "#e8e8e8",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});
