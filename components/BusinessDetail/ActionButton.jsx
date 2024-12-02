import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

export default function ActionButton({ business }) {
  const actionButtonMenu = [
    {
      id: 1,
      name: "Call",
      icon: require("../../assets/images/ActionImages/call.png"),
      url: "tel:" + business?.contact,
    },
    {
      id: 2,
      name: "Location",
      icon: require("../../assets/images/ActionImages/pin.png"),
      url:
        "https://www.google.com/maps/search/?api=1&query=" + business?.adress,
    },
    {
      id: 3,
      name: "Web",
      icon: require("../../assets/images/ActionImages/web.png"),
      url: business?.website,
    },
    {
      id: 4,
      name: "Share",
      icon: require("../../assets/images/ActionImages/share.png"),
      url: business?.website,
    },
  ];
  const onPressHandle = (item) => {
    if (item.name === "share") {
      return;
    }
    Linking.openURL(item.url);
  };
  return (
    <View
      style={{
        backgroundColor: "white",
        paddingHorizontal: 20,
      }}
    >
      <FlatList
        data={actionButtonMenu}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        scrollEnabled={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPressHandle(item)}>
            <Image source={item.icon} style={{ width: 45, height: 45 }} />
            <Text
              style={{
                fontFamily: "outfit-medium",
                textAlign: "center",
                marginTop: 3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
