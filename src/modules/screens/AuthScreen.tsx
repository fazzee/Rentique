import {NavigationFunctionComponent} from "react-native-navigation";
import React, {useState} from "react";
import {Pages} from "../../navigation/pages";
import {Navigation} from "react-native-navigation";
import {View, Image, Text, Switch} from "react-native";
import Button from "../../common/components/new/Buttons/Button";
import Heading from "../../common/components/new/Heading";
import OutlineButton from "../../common/components/new/Buttons/OutlineButton";

const LoginScreen: NavigationFunctionComponent = () => {
  const handleLogin = () => {
    Navigation.push("MainStackRoot", {
      component: {
        name: Pages.signIn.name,
      },
    });
  };

  const handleRegister = () => {
    Navigation.push("MainStackRoot", {
      component: {
        name: Pages.signUp.name,
      },
    });
  };

  return (
    <View className={`flex-1 items-center justify-end w-full h-screen`}>
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        }} // Replace with your background image
        className="absolute w-full h-full bg-contain"
      />

      <View className="absolute w-full h-full bg-black/70" />

      <View className={`w-full px-6 py-8 flex shadow-2xl bg-black`}>
        <Heading text="Welcome to Rentique" theme={false} />

        <View className="flex flex-col w-full space-y-3">
          <View className="w-full">
            <Button label="Sign in" onPress={handleLogin} />
          </View>

          <View className="w-full">
            <OutlineButton label="Create Account" theme={false} onPress={handleRegister} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

LoginScreen.options = {
  topBar: {
    visible: false,
  },
};
