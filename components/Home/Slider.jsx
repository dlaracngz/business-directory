import { View, Text, FlatList, Image } from "react-native";
import React from "react";

export default function Slider() {
  const sliderList = [
    {
      id: 1,
      imageUrl: require("../../assets/images/slider1.jpg"),
    },
    {
      id: 2,
      imageUrl: require("../../assets/images/slider2.jpg"),
    },
    {
      id: 3,
      imageUrl: require("../../assets/images/slider3.jpg"),
    },
  ];
  return (
    <View>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "outfit-bold",
          paddingHorizontal: 20,
          paddingVertical: 12,
        }}
      >
        #Special for you
      </Text>
      <View style={{ paddingHorizontal: 20 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={sliderList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginRight: 10 }}>
              <Image
                source={item.imageUrl}
                style={{
                  width: 300,
                  height: 160,
                  borderRadius: 10,
                  objectFit: "cover",
                }}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}
