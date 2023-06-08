import {View, Text} from "react-native";
import {NavigationFunctionComponent} from "react-native-navigation";
import React from "react";

const FavoriteScreen: NavigationFunctionComponent = () => {
  return (
    <View>
      <Text>FavoriteScreen</Text>
    </View>
  );
};

export default FavoriteScreen;

FavoriteScreen.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    title: {
      text: "Favorite",
    },
  },
};
