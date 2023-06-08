import {NavigationFunctionComponent} from "react-native-navigation";
import {View, Text} from "react-native";
import React from "react";

const BookingScreen: NavigationFunctionComponent = () => {
  return (
    <View>
      <Text>BookingScreen</Text>
    </View>
  );
};

export default BookingScreen;

BookingScreen.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    title: {
      text: "Booking",
    },
  },
};
