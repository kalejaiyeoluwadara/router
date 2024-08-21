import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { View, Text, StyleSheet, Alert, Image } from "react-native";
import {
  DrawerContent,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  Feather,
  AntDesign,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import { router, usePathname } from "expo-router";
import { useEffect } from "react";

const CustomDrawerContent = (props) => {
  const pathname = usePathname();
  useEffect(() => {
    // Alert.alert(pathname);
  }, [pathname]);
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.userInfoWrapper}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/26.jpg" }}
          width={80}
          height={80}
          style={styles.userImg}
        />
        <View style={styles.userDetailsWrapper}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john@email.com</Text>
        </View>
      </View>
      <DrawerItem
        icon={({ color, size }) => (
          <Feather
            name="list"
            size={size}
            color={pathname == "/feed" ? "#fff" : "#000"}
          />
        )}
        label={"Feed"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/feed" ? "#fff" : "#000" },
        ]}
        style={{ backgroundColor: pathname == "/feed" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/(drawer)/(tabs)/feed");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <AntDesign
            name="user"
            size={size}
            color={pathname == "/profile" ? "#fff" : "#000"}
          />
        )}
        label={"Profile"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/profile" ? "#fff" : "#000" },
        ]}
        style={{ backgroundColor: pathname == "/profile" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/(drawer)/(tabs)/profile");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <MaterialIcons
            name="favorite-outline"
            size={size}
            color={pathname == "/favourites" ? "#fff" : "#000"}
          />
        )}
        label={"Favourites"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/favourites" ? "#fff" : "#000" },
        ]}
        style={{ backgroundColor: pathname == "/favourites" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/favourites");
        }}
      />
      <DrawerItem
        icon={({ color, size }) => (
          <Ionicons
            name="settings-outline"
            size={size}
            color={pathname == "/settings" ? "#fff" : "#000"}
          />
        )}
        label={"Settings"}
        labelStyle={[
          styles.navItemLabel,
          { color: pathname == "/settings" ? "#fff" : "#000" },
        ]}
        style={{ backgroundColor: pathname == "/settings" ? "#333" : "#fff" }}
        onPress={() => {
          router.push("/settings");
        }}
      />
    </DrawerContentScrollView>
  );
};
export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={(props) => {
          return <CustomDrawerContent {...props} />;
        }}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: -20,
    fontSize: 18,
  },
  userInfoWrapper: {
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  userImg: {
    borderRadius: 40,
  },
  userDetailsWrapper: {
    marginTop: 25,
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 16,
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
});
