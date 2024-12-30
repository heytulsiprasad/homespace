import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-4xl text-center font-rubik-bold mb-6">
        Welcome to Relocate
      </Text>
    </View>
  );
}
