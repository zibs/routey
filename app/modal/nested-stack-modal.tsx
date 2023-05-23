import { Link, Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Text, View } from "../../components/Themed";

export default function NestedModal() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Stack.Screen />
      <Text>Hi nested stack</Text>
      <Link href="/modal/an-error">Go to screen with error</Link>
    </ScrollView>
  );
}
