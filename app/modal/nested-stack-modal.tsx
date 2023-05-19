import { Stack } from "expo-router";
import { ScrollView } from "react-native";
import { Text, View } from "../../components/Themed";

export default function NestedModal() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Stack.Screen />
      <Text>Hi nested stack</Text>
    </ScrollView>
  );
}
