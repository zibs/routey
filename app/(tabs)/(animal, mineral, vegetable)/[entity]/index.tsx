import { ScrollView } from "react-native";
import { Text } from "../../../../components/Themed";
import { Link, Stack, useLocalSearchParams } from "expo-router";
export default function EntityScreen() {
  const { entity } = useLocalSearchParams<{ entity: string }>();

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Stack.Screen options={{ headerTitle: entity, title: entity }} />
      <Text>Entity</Text>
    </ScrollView>
  );
}
