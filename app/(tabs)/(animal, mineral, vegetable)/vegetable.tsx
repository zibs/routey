import { Link } from "expo-router";
import { Text, View } from "../../../components/Themed";
import { Pressable, ScrollView } from "react-native";

const vegetables = ["eggplant", "celery"];
export default function VegetableScreen() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>Vegetables</Text>
      {vegetables.map((vegetable, index) => {
        return (
          <Link key={index} href={`./${vegetable}`} asChild>
            <Pressable>
              {({ hovered, pressed }) => <Text>{vegetable}</Text>}
            </Pressable>
          </Link>
        );
      })}
    </ScrollView>
  );
}
