import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import BusinessListCard from "../../components/BusinessList/BusinessListCard";
import { Colors } from "../../constants/Colors";

export default function BusinessListByCategory() {
  const BusinessListByCategory = [
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
      category: "Daily Product",
      contact: "1234567890",
      imageUrl: require("../../assets/images/dairy-product.jpg"),
      name: "Amul Dairy Products Shop",
      website: "http://google.com",
    },
    {
      id: 3,
      about:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus qui sed enim voluptates earum similique fugiat itaque dolore perferendis distinctio vero quae perspiciatis, architecto provident ipsa mollitia consectetur expedita quod fuga officiis nihil necessitatibus accusamus magni! Ut id possimus mollitia omnis perspiciatis iusto quas, enim, nemo, deserunt quasi illum.",
      adress: "811 Concard Mila Boulevard Suite 271A, Concard, NC 28027",
      category: "Shopping",
      contact: "1234567890",
      imageUrl: require("../../assets/images/clothes1.jpg"),
      name: "AceCors Shop",
      website: "http://google.com",
    },
    {
      id: 4,
      about:
        " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus qui sed enim voluptates earum similique fugiat itaque dolore perferendis distinctio vero quae perspiciatis, architecto provident ipsa mollitia consectetur expedita quod fuga officiis nihil necessitatibus accusamus magni! Ut id possimus mollitia omnis perspiciatis iusto quas, enim, nemo, deserunt quasi illum.",
      adress: "746 Brich Loop,Center NC 28117",
      category: "Shopping",
      contact: "1234567890",
      imageUrl: require("../../assets/images/clothes2.jpg"),
      name: "Katty Spade",
      website: "http://google.com",
    },
  ];
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);
  const filteredBusinessList = BusinessListByCategory.filter(
    (item) => item.category === category
  );
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });
  }, []);
  return (
    <View>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={Colors.PRIMARY}
          style={{
            marginTop: "10%",
          }}
        />
      ) : filteredBusinessList?.length > 0 ? (
        <FlatList
          style={{ paddingVertical: 10 }}
          data={filteredBusinessList}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          renderItem={({ item }) => (
            <BusinessListCard item={item} key={item.id} />
          )}
        />
      ) : (
        <Text
          style={{
            fontSize: 20,
            fontFamily: "outfit-bold",
            color: Colors.GRAY,
            paddingTop: 20,
            textAlign: "center",
          }}
        >
          No Business Found
        </Text>
      )}
    </View>
  );
}
