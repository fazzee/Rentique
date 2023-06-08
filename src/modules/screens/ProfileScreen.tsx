import {View, Text} from "react-native";
import {NavigationFunctionComponent} from "react-native-navigation";
import React from "react";

const ProfileScreen: NavigationFunctionComponent = () => {
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

ProfileScreen.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    title: {
      text: "Profile",
    },
  },
};
