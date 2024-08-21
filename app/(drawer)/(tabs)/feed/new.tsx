import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function AddNewPost() {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>AddNewPost</Text>
      <Link href={"/feed"}>Go back</Link>
    </View>
  );
}

const styles = StyleSheet.create({});
