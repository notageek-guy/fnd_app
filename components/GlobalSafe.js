import { ScrollView, SafeAreaView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function GlobalSafe({ children }) {
  return (
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {children}
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
  );
}
