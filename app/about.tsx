import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function About() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 18 }}>About Page</Text>
      <Button onPress={() => router.back()} title="Go Back" />
    </View>
  );
}
