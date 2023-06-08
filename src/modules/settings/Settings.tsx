import {NavigationFunctionComponent} from "react-native-navigation";
import {ScrollView, SafeAreaView, Text, View} from "react-native";
import React from "react";
import {localization} from "../../common/localization/localization";
import {CommonStyles} from "../../core/theme/commonStyles";

export const Settings: NavigationFunctionComponent = (): JSX.Element => {
  return (
    <ScrollView>
      <SafeAreaView className="flex flex-col w-full h-full min-h-screen justify-center items-center">
        <Text className="text-3xl font-bold text-rose-600">{localization.pages.settings}</Text>
      </SafeAreaView>
    </ScrollView>
  );
};

Settings.options = {
  topBar: {
    visible: false,
    largeTitle: {
      visible: false,
    },
    searchBar: {
      visible: false,
    },
    title: {
      text: localization.pages.settings,
    },
  },
};
