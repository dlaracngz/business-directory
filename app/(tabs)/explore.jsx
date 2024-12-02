import { View, Text, TextInput } from "react-native";
import Category from "../../components/Home/Category";
import React from "react";
import { Colors } from "../../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function explore() {
  return (
    <View>
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 25 }}>
          Explore More
        </Text>
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
            borderWidth: 1,
            borderColor: Colors.PRIMARY,
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
      <Category />
    </View>
  );
}
