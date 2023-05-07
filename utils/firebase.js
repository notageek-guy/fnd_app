// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence } from "firebase/auth/react-native";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoc6f7CzrQTJ75KkXun-LTiZVw9RTLY5o",
  authDomain: "chat-app-2aa8f.firebaseapp.com",
  projectId: "chat-app-2aa8f",
  storageBucket: "chat-app-2aa8f.appspot.com",
  messagingSenderId: "331076456676",
  appId: "1:331076456676:web:edbcea69f3bb4593191cf1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };