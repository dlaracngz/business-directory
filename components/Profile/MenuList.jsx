import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function MenuList() {
  const menuList = [
    {
      id: 1,
      name: "Add Business",
      icon: require("../../assets/images/menuList/add.png"),
      path: "",
    },
    {
      id: 2,
      name: "My Business",
      icon: require("../../assets/images/menuList/business.png"),
      path: "",
    },
    {
      id: 3,
      name: "Share App",
      icon: require("../../assets/images/menuList/share_1.png"),
      path: "",
    },
    {
      id: 4,
      name: "Logout",
      icon: require("../../assets/images/menuList/logout.png"),
      path: "",
    },
  ];
  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={menuList}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              flex: 1,
              padding: 10,
              borderRadius: 15,
              borderColor: Colors.GRAY,
              borderWidth: 1,
              margin: 10,
              backgroundColor: "white",
            }}
          >
            <Image source={item.icon} style={{ width: 50, height: 50 }} />
            <Text
              style={{ fontFamily: "outfit-medium", fontSize: 16, flex: 1 }}
            >
              {item.name}
            </Text>
          </View>
        )}
      />
    </View>
  );
}
