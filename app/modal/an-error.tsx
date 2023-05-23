import { ScrollView, View } from "react-native";
import { Text } from "../../components/Themed";
import { ErrorBoundaryProps } from "expo-router";

export function ErrorBoundary(props: ErrorBoundaryProps) {
  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={{ flex: 1, backgroundColor: "orange" }}>
        <Text>this is the error boundary</Text>
        <Text>{props.error.message}</Text>
        <Text onPress={props.retry}>Try Again?</Text>
      </View>
    </ScrollView>
  );
}

export default function ErrorScreen() {
  throw Error("testing error boundary");
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Text>An Error screen</Text>
    </ScrollView>
  );
}
