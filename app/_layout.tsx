import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import { Stack, router } from "expo-router";

const Contact = () => {
  return (
    <Pressable onPress={() => router.push("/contact")}>
      <Text>Contact</Text>
    </Pressable>
  );
};
export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "red",
        },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerTitleAlign: "center",
          headerRight: () => (
            <Pressable
              onPress={() => {
                router.push("/contact");
              }}
            >
              <Text>Contact</Text>
            </Pressable>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => {
                router.push("/about");
              }}
            >
              <Text>About</Text>
            </Pressable>
          ),
        }}
      />
      <Stack.Screen name="about" options={{ headerTitle: "About" }} />
      <Stack.Screen
        name="blog/index"
        options={{ headerTitle: "All Blog Posts" }}
      />
      <Stack.Screen
        name="contact"
        options={{
          headerTitle: "Contact",
          presentation: "modal", // Display as a modal
          gestureEnabled: true, // Enable gestures to close the modal
        }}
      />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
}
