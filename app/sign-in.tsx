import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../contexts/auth";

export default function SignIn() {
  const { signIn } = useAuth();
  const router = useRouter();
  function handleSignIn() {
    signIn();
    router.replace("/vegetable");
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text onPress={() => handleSignIn()}>Sign In to view Vegetable tab</Text>
    </View>
  );
}
