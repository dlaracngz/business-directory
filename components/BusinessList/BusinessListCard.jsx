import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function BusinessListCard({ item }) {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 15,
        display: "flex",
        flexDirection: "row",
        gap: 7,
        // Android shadow properties
        elevation: 5,
        // iOS shadow properties
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
      }}
      onPress={() => router.push("/businessdetail/" + item.id)}
    >
      <View>
        <Image
          source={item.imageUrl}
          style={{ width: 130, height: 120, borderRadius: 15 }}
        />
      </View>
      <View style={{ flex: 1, gap: 4 }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 17 }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-regular",
            color: Colors.GRAY,
            fontSize: 14,
          }}
        >
          {item.adress}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Image
            source={require("./../../assets/images/star.png")}
            style={{ width: 15, height: 15 }}
          />
          <Text style={{ fontFamily: "outfit-regular" }}>4.5</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
