import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

export default function Intro({ business }) {
  const router = useRouter();
  return (
    <View>
      <View
        style={{
          position: "absolute",
          zIndex: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          padding: 20,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle" size={36} color="white" />
        </TouchableOpacity>
        <Ionicons name="heart-outline" size={36} color="white" />
      </View>
      <Image
        source={business.imageUrl}
        style={{ width: "100%", height: 300 }}
      />
      <View
        style={{
          padding: 20,
          marginTop: -20,
          backgroundColor: "white",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        <Text style={{ fontSize: 24, fontFamily: "outfit-bold" }}>
          {business.name}
        </Text>
        <Text style={{ fontFamily: "outfit-regular", fontSize: 16 }}>
          {business.adress}
        </Text>
      </View>
    </View>
  );
}
