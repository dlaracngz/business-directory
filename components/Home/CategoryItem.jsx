import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

export default function CategoryItem({ item, onCategoryPress }) {
  return (
    <TouchableOpacity onPress={() => onCategoryPress(item)}>
      <View
        style={{
          display: "flex",
          flexDirection: "col",
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 5,
        }}
      >
        <View
          style={{
            backgroundColor: Colors.ICON_BG,
            padding: 15,
            borderRadius: 99,
          }}
        >
          <Image source={item.imageUrl} style={{ width: 45, height: 45 }} />
        </View>
        <Text
          style={{ fontFamily: "outfit-medium", fontSize: 14, marginTop: 4 }}
        >
          {item.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
