import { Link, Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Text, View } from "../../components/Themed";

export default function Modal() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Stack.Screen options={{ title: "modal" }} />
      <Text>Inside Modal</Text>
      <Link href="/modal/nested-stack-modal">
        Go to stack screen inside modal
      </Link>
    </ScrollView>
  );
}
