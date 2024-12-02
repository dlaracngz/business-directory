import { View, Text, ActivityIndicator, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { Colors } from "../../constants/Colors";
import Intro from "../../components/BusinessDetail/Intro";
import ActionButton from "../../components/BusinessDetail/ActionButton";
import About from "../../components/BusinessDetail/About";
import Reviews from "../../components/BusinessDetail/Reviews";

export default function BusinessDetail() {
  const BusinessListByCategory = [
    {
      id: 1,
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus qui sed enim voluptates earum similique fugiat itaque dolore perferendis distinctio vero quae perspiciatis, architecto provident ipsa mollitia consectetur expedita quod fuga officiis nihil necessitatibus accusamus magni! Ut id possimus mollitia omnis perspiciatis iusto quas, enim, nemo, deserunt quasi illum.",
      adress: "525 N tryon Street NC 28117",
      category: "Shopping",
      contact: "1234567890",
      imageUrl: require("../../assets/images/clothes.jpg"),
      name: "Modern Clothing Center",
      website: "https://www.google.com.tr/?hl=tr",
    },
    {
      id: 2,
      about:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam possimus qui sed enim voluptates earum similique fugiat itaque dolore perferendis distinctio vero quae perspiciatis, architecto provident ipsa mollitia consectetur expedita quod fuga officiis nihil necessitatibus accusamus magni! Ut id possimus mollitia omnis perspiciatis iusto quas, enim, nemo, deserunt quasi illum.",
      adress: "746 Brich Loop,Center NC 28117",
      category: "Daily Product",
      contact: "1234567890",
      imageUrl: require("../../assets/images/dairy-product.jpg"),
      name: "Amul Dairy Products Shop",
      website: "https://www.google.com.tr/?hl=tr",
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
  const { businessid } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);
  const [business, setBusiness] = useState();

  useEffect(() => {
    const foundBusiness = BusinessListByCategory.find(
      (item) => item.id === Number(businessid)
    );

    setTimeout(() => {
      setBusiness(foundBusiness);
      setLoading(false);
    }, 1000);
  }, [businessid]);

  return (
    <ScrollView>
      {loading ? (
        <ActivityIndicator
          size="large"
          color={Colors.PRIMARY}
          style={{ marginTop: "10%" }}
        />
      ) : business ? (
        <View>
          <Intro business={business} />
          <ActionButton business={business} />
          <About business={business} />
          <Reviews business={business} />
        </View>
      ) : (
        <Text>Business not found</Text>
      )}
    </ScrollView>
  );
}
