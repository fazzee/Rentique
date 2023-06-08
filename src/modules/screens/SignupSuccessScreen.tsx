import React, {useState} from "react";
import {View, SafeAreaView, Text} from "react-native";
import TimedSlideshow from "react-native-timed-slideshow";
import {Navigation, NavigationFunctionComponent} from "react-native-navigation";
import {styled} from "nativewind";
import Button from "../../common/components/new/Buttons/Button";
import {imagesSlideshow} from "../../common/data/imagesSlideshow";
import {tabsRoot} from "../../navigation/roots/roots";
import {LoadingComponent} from "../../common/components/LoadingComponent";

const StyledView = styled(View);

const SignupSuccessScreen: NavigationFunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = () => {
    setIsLoading(true);
    Navigation.setRoot(tabsRoot);
  };

  return isLoading ? (
    <LoadingComponent />
  ) : (
    <SafeAreaView className={`flex-1 items-center justify-end w-full h-screen`}>
      <TimedSlideshow
        items={imagesSlideshow}
        className="absolute w-full h-full bg-contain"
        showProgressBar={false}
        // renderFooter={null}
      />

      <View className="absolute w-full h-full bg-black/10" />

      <View className={`absolute w-full px-6 py-12 space-y-3 flex shadow-2xl bg-black`}>
        <Text className="text-background text-2xl mb-6">Welcome to Rentique</Text>

        <StyledView className="w-full">
          <Button label="Start" onPress={handleStart} />
        </StyledView>
      </View>
    </SafeAreaView>
  );
};

export default SignupSuccessScreen;

SignupSuccessScreen.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    title: {
      text: "SignupSuccess",
    },
  },
};
