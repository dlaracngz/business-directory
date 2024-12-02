import { View, Text, Image } from "react-native";
import React from "react";

export default function UserIntro() {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 5,
      }}
    >
      <Image
        source={require("../../assets/images/avatar.png")}
        style={{ width: 100, height: 100, borderRadius: 99 }}
      />
      <Text style={{ fontFamily: "outfit-bold", fontSize: 18, marginTop: 5 }}>
        Dilara Cengiz
      </Text>
      <Text style={{ fontFamily: "outfit-regular", fontSize: 16 }}>
        deneme@gmail.com
      </Text>
    </View>
  );
}
