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
import { useEffect, useState } from "react";
import { auth } from "../../utils/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { setAuth } = useAuth();
  const handleEmail = (email) => setEmail(email);
  const handlePass = (pass) => setPass(pass);
  const handleSubmit = async () => {
    try {
      if (pass && email) {
        await signInWithEmailAndPassword(auth, email, pass);
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
            Login here
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
          Forgot your password?
        </Link>
        <LoginBtn
          className="bg-indigo-700 py-3 rounded-md"
          onPress={handleSubmit}
        >
          Login
        </LoginBtn>
        <View className="my-4">
          <Link
            href="(auth)/signup"
            className="text-base text-center font-bold"
          >
            Create User
          </Link>
        </View>
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
