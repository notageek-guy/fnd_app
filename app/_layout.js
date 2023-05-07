import { Stack } from "expo-router";
import { Provider } from "../context/auth";
export default function Layout() {
  return (
    <Provider>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="details"
          options={{
            title: "Details",
            headerShadowVisible: false,
          }}
        />
        <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/signup" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)/root" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
}
