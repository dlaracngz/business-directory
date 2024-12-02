import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Rating } from "react-native-ratings";
import React, { useState } from "react";
import { Colors } from "../../constants/Colors";

export default function Reviews({ business }) {
  const [rating, setRating] = useState(4);
  const [userInput, setUserInput] = useState();
  return (
    <View style={{ padding: 20, backgroundColor: "white" }}>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 20 }}>Reviews</Text>
      <View>
        <Rating
          showRating={false}
          imageSize={20}
          onFinishRating={(rating) => setRating(rating)}
          style={{ paddingVertical: 10 }}
        />
        <TextInput
          placeholder="Write your comment"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => setUserInput(value)}
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor: Colors.GRAY,
            textAlignVertical: "top",
            height: 100,
          }}
        />
        <TouchableOpacity
          disabled={!userInput}
          onPress={() => console.log(userInput, rating)}
          style={{
            padding: 10,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "outfit-medium",
              textAlign: "center",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
