import {View, Text, TouchableOpacity} from "react-native";
import {NavigationFunctionComponent} from "react-native-navigation";
import {Navigation} from "react-native-navigation";
import React, {useState} from "react";
import {styled} from "nativewind";
import Button from "../../common/components/new/Buttons/Button";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import {StyleSheet} from "react-native";
import {tabsRoot} from "../../navigation/roots/roots";
import {LoadingComponent} from "../../common/components/LoadingComponent";

const StyledView = styled(View);

const TwoFAScreen: NavigationFunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleResendCode = () => {
    console.log("Resend Code");
  };

  const onSubmit = () => {
    setIsLoading(true);
    Navigation.setRoot(tabsRoot);
  };

  return isLoading ? (
    <LoadingComponent />
  ) : (
    <View className={`flex-1 w-fit gap-y-10 justify-between h-screen py-20 px-6 bg-white`}>
      <StyledView className="w-full">
        <StyledView className="w-full">
          <Text className={`text-2xl text-green md:text-2xl`}>Two factor Auth</Text>
        </StyledView>

        <OTPInputView
          style={{
            width: "100%",
            height: 100,
            // paddingRight: 45,
          }}
          pinCount={4}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          // onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />

        <StyledView className="flex flex-row mr-24">
          <StyledView className="w-full">
            <Text className={`text-gray-dark`}>Had problems receiving code?</Text>
          </StyledView>

          <TouchableOpacity onPress={handleResendCode}>
            <Text className={`text-green text-center`}>Resend My Code</Text>
          </TouchableOpacity>
        </StyledView>
      </StyledView>

      <StyledView className="w-full">
        <Button label="Verify" onPress={onSubmit} />
      </StyledView>
    </View>
  );
};

export default TwoFAScreen;

const styles = StyleSheet.create({
  borderStyleHighLighted: {
    borderColor: "#000000",
  },

  underlineStyleBase: {
    width: 70,
    height: 50,
    borderWidth: 1,
    borderColor: "#000000",
  },

  underlineStyleHighLighted: {
    borderColor: "#004225",
  },
});

TwoFAScreen.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    title: {
      text: "Two Factor Authentication",
    },
  },
};
