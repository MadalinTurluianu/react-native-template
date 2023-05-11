import { TestComponent } from "@components/TestComponent";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

export default function App() {
  return (
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    <View style={styles.container}>
      <TestComponent />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
