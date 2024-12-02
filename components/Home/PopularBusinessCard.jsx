import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

export default function PopularBusinessCard({ item }) {
  const router = useRouter();
  return (
    <TouchableOpacity
      onPress={() => router.push("/businessdetail/" + item.id)}
      style={{
        marginTop: 10,
        padding: 10,
        borderRadius: 15,
        backgroundColor: "white",
      }}
    >
      <View>
        <Image
          source={item.imageUrl}
          style={{ width: 200, height: 130, borderRadius: 15 }}
        />
      </View>
      <View style={{ marginTop: 7 }}>
        <Text style={{ fontFamily: "outfit-bold", fontSize: 17 }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-regular",
            fontSize: 13,
            color: Colors.GRAY,
            maxWidth: 200,
          }}
        >
          {item.adress}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 4,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 4,
              alignItems: "center",
            }}
          >
            <Image
              source={require("./../../assets/images/star.png")}
              style={{ width: 15, height: 15 }}
            />
            <Text style={{ fontFamily: "outfit-regular" }}>4.5</Text>
          </View>
          <Text
            style={{
              fontFamily: "outfit-regular",
              backgroundColor: Colors.PRIMARY,
              color: "white",
              padding: 4,
              fontSize: 10,
              borderRadius: 5,
            }}
          >
            {item.category}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
