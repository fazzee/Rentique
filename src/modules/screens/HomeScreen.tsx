import {NavigationFunctionComponent} from "react-native-navigation";
import React, {useEffect} from "react";
import {showHomeTabs} from "../../navigation/showHomeTabs";

const HomeScreen: NavigationFunctionComponent = () => {
  // useEffect(() => showHomeTabs());

  return <>{showHomeTabs()}</>;
};

export default HomeScreen;
