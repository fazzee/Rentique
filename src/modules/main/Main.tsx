import {NavigationFunctionComponent} from "react-native-navigation";
import {SafeAreaView, ScrollView, Text} from "react-native";
import React from "react";
import {localization} from "../../common/localization/localization";

export const Main: NavigationFunctionComponent = (): JSX.Element => {
  return (
    <ScrollView testID={"MainPageID"}>
      <SafeAreaView className="flex flex-col w-full h-full min-h-screen justify-center items-center">
        <Text className="text-3xl font-bold text-rose-600">{localization.pages.main}</Text>
      </SafeAreaView>
    </ScrollView>
  );
};

Main.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    title: {
      text: localization.pages.main,
    },
  },
};
