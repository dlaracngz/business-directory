import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Header() {
  return (
    <View
      style={{
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={require("../../assets/images/avatar.png")}
          style={{ width: 50, height: 50, borderRadius: 100 }}
        />
        <View>
          <Text style={{ color: "#fff" }}>Welcome ,</Text>
          <Text
            style={{ color: "#fff", fontSize: 17, fontFamily: "outfit-medium" }}
          >
            Dilara Cengiz
          </Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: 8,
          marginTop: 10,
          padding: 4,
        }}
      >
        <Ionicons
          name="search"
          size={24}
          color={Colors.PRIMARY}
          style={{ marginLeft: 10 }}
        />
        <TextInput
          placeholder="Search..."
          style={{ fontFamily: "outfit-regular", fontSize: 15 }}
        />
      </View>
    </View>
  );
}
