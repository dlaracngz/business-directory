import { View, Text, FlatList } from "react-native";
import { Colors } from "../../constants/Colors";
import React from "react";
import PopularBusinessCard from "./PopularBusinessCard";

export default function BusinessList() {
  const popularBusinessList = [
    {
      id: 1,
      about:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus qui sed enim voluptates earum similique fugiat itaque dolore perferendis distinctio vero quae perspiciatis, architecto provident ipsa mollitia consectetur expedita quod fuga officiis nihil necessitatibus accusamus magni! Ut id possimus mollitia omnis perspiciatis iusto quas, enim, nemo, deserunt quasi illum.",
      adress: "525 N tryon Street NC 28117",
      category: "Shopping",
      contact: "1234567890",
      imageUrl: require("../../assets/images/clothes.jpg"),
      name: "Modern Clothing Center",
      website: "http://google.com",
    },
    {
      id: 2,
      about:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus qui sed enim voluptates earum similique fugiat itaque dolore perferendis distinctio vero quae perspiciatis, architecto provident ipsa mollitia consectetur expedita quod fuga officiis nihil necessitatibus accusamus magni! Ut id possimus mollitia omnis perspiciatis iusto quas, enim, nemo, deserunt quasi illum.",
      adress: "746 Brich Loop,Center NC 28117",
      category: "Daily Products",
      contact: "1234567890",
      imageUrl: require("../../assets/images/dairy-product.jpg"),
      name: "Amul Dairy Products Shop",
      website: "http://google.com",
    },
    {
      id: 3,
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus qui sed enim voluptates earum similique fugiat itaque dolore perferendis distinctio vero quae perspiciatis, architecto provident ipsa mollitia consectetur expedita quod fuga officiis nihil necessitatibus accusamus magni! Ut id possimus mollitia omnis perspiciatis iusto quas, enim, nemo, deserunt quasi illum.",
      adress: "811 Concard Mila Boulevard Suite 271A, Concard, NC 28027",
      category: "Shopping",
      contact: "1234567890",
      imageUrl: require("../../assets/images/clothes1.jpg"),
      name: "AceCors Shop",
      website: "https://www.google.com.tr/?hl=tr",
    },
    {
      id: 4,
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus qui sed enim voluptates earum similique fugiat itaque dolore perferendis distinctio vero quae perspiciatis, architecto provident ipsa mollitia consectetur expedita quod fuga officiis nihil necessitatibus accusamus magni! Ut id possimus mollitia omnis perspiciatis iusto quas, enim, nemo, deserunt quasi illum.",
      adress: "746 Brich Loop,Center NC 28117",
      category: "Shopping",
      contact: "1234567890",
      imageUrl: require("../../assets/images/clothes2.jpg"),
      name: "Katty Spade",
      website: "https://www.google.com.tr/?hl=tr",
    },
  ];
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "black",
            fontFamily: "outfit-bold",
          }}
        >
          Popular Business
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: Colors.PRIMARY,
            fontFamily: "outfit-medium",
          }}
        >
          View All
        </Text>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
        data={popularBusinessList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PopularBusinessCard item={item} key={item.id} />
        )}
      />
    </View>
  );
}
