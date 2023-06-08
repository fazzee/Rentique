import {NavigationFunctionComponent} from "react-native-navigation";
import {ScrollView, SafeAreaView, Text, View} from "react-native";
import React from "react";
import {localization} from "../../common/localization/localization";
import {CommonStyles} from "../../core/theme/commonStyles";

export const Search: NavigationFunctionComponent = (): JSX.Element => {
  return (
    <ScrollView contentInsetAdjustmentBehavior={"automatic"} style={CommonStyles.flex1}>
      <SafeAreaView className="flex flex-col w-full h-full min-h-screen justify-center items-center">
        <Text className="text-xl font-bold text-rose-600">{localization.pages.search}</Text>
      </SafeAreaView>
    </ScrollView>
  );
};

Search.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    searchBar: {
      visible: true,
    },
    title: {
      text: localization.pages.search,
    },
  },
};
