import { Link } from "expo-router";
import { Text, View } from "../../../components/Themed";
import { Pressable, ScrollView } from "react-native";

const minerals = ["gold", "emerald", "amethyst"];

// `/(tabs)/(mineral)/${mineral}`
export default function MineralScreen() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>Mineral</Text>
      {minerals.map((mineral, index) => {
        return (
          <Link key={index} href={`./${mineral}`} asChild>
            <Pressable>
              {({ hovered, pressed }) => <Text>{mineral}</Text>}
            </Pressable>
          </Link>
        );
      })}
    </ScrollView>
  );
}
