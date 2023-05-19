import { Link, Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Text, View } from "../../components/Themed";

export default function Modal() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Stack.Screen />
      <Text>Hi</Text>
      <Link href="/modal/nested-stack-modal">Go to modal</Link>
    </ScrollView>
  );
}
