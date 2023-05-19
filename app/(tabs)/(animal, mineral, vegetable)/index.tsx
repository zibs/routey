import { Link } from "expo-router";
import { ScrollView } from "react-native";
import { Text, View } from "../../../components/Themed";

export default function AnimalScreen() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>Animal</Text>
      <Link href="/modal">Go to modal</Link>
      <Link href="/random">Go to undeclared screen</Link>
    </ScrollView>
  );
}
