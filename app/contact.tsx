import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function ContactModal() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
        padding: 20,
      }}
    >
      <View
        style={{
          backgroundColor: "white", // Content box with white background
          padding: 20,
          borderRadius: 10,
          width: "80%",
          alignItems: "center",
        }}
      >
        <Text style={{ marginBottom: 20 }}>Contact Modal</Text>
        <Button title="Close" onPress={() => router.back()} />
      </View>
    </View>
  );
}
