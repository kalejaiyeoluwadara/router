import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router, Tabs } from "expo-router";
import {
  Feather,
  AntDesign,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <DrawerToggleButton tintColor="#000" />,
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color }) => <Feather color={color} name="list" />,
          tabBarLabel: "Feed",
          headerTitle: "Feeds",
          headerRight: () => (
            <Pressable onPress={() => router.push("feed/new")}>
              <Text>Add Post</Text>
            </Pressable>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <AntDesign color={color} name="user" />,
          tabBarLabel: "Profile",
          headerTitle: "Profile",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
