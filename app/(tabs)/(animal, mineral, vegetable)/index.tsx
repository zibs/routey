import { Link, Stack } from "expo-router";
import { Pressable, ScrollView } from "react-native";
import { Text, View } from "../../../components/Themed";

const animals = ["dog", "cat", "trout", "zebra"];

export default function AnimalScreen() {
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Stack.Screen options={{ title: "Animal" }} />

      <Link href="/modal" asChild>
        <Pressable>
          {({ hovered, pressed }) => <Text>Go to modal</Text>}
        </Pressable>
      </Link>
      <Link href="/random" asChild>
        <Pressable>
          {({ hovered, pressed }) => <Text>Go to undeclared screen</Text>}
        </Pressable>
      </Link>

      {animals.map((animal, index) => {
        return (
          <Link key={index} href={`/${animal}`} asChild>
            <Pressable>
              {({ hovered, pressed }) => <Text>{animal}</Text>}
            </Pressable>
          </Link>
        );
      })}
      <Link href="/not/a/screen" asChild>
        <Pressable>
          {({ hovered, pressed }) => <Text>Go to 404 screen</Text>}
        </Pressable>
      </Link>
    </ScrollView>
  );
}
