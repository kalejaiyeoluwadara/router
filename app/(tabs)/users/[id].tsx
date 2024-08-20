import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function User() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text>User -{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
