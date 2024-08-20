import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function index() {
  return (
    <View>
      <Link href={"users/1"}>Go to user 10</Link>
    </View>
  );
}

const styles = StyleSheet.create({});
