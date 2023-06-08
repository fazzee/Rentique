import {View, Text} from "react-native";
import {NavigationFunctionComponent} from "react-native-navigation";
import React from "react";

const MessageScreen: NavigationFunctionComponent = () => {
  return (
    <View>
      <Text>MessageScreen</Text>
    </View>
  );
};

export default MessageScreen;

MessageScreen.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    title: {
      text: "Message",
    },
  },
};
