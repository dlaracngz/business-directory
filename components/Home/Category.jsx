import { View, Text, FlatList } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import CategoryItem from "./CategoryItem";
import { useRouter } from "expo-router";

export default function Category() {
  const CategoryList = [
    {
      id: 1,
      name: "Shopping",
      imageUrl: require("../../assets/images/Category/shopping.png"),
    },
    {
      id: 2,
      name: "Daily Product",
      imageUrl: require("../../assets/images/Category/daily-products.png"),
    },
    {
      id: 3,
      name: "Drink",
      imageUrl: require("../../assets/images/Category/drink.png"),
    },
    {
      id: 4,
      name: "Food",
      imageUrl: require("../../assets/images/Category/food.png"),
    },
    {
      id: 5,
      name: "Fruits",
      imageUrl: require("../../assets/images/Category/fruit.png"),
    },
    {
      id: 6,
      name: "Vegetables",
      imageUrl: require("../../assets/images/Category/vegetable.png"),
    },
    {
      id: 7,
      name: "Meats",
      imageUrl: require("../../assets/images/Category/meat.png"),
    },
    {
      id: 8,
      name: "Juice",
      imageUrl: require("../../assets/images/Category/milkAndJuice.png"),
    },
    {
      id: 9,
      name: "Chips",
      imageUrl: require("../../assets/images/Category/potato-chips.png"),
    },
  ];
  const router = useRouter();
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "black",
            fontFamily: "outfit-bold",
          }}
        >
          Category
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
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 10 }}
          data={CategoryList}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CategoryItem
              item={item}
              key={item.id}
              onCategoryPress={(item) =>
                router.push(`/businesslist/${item.name}`)
              }
            />
          )}
        />
      </View>
    </View>
  );
}
