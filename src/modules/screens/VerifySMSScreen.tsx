import {View, Text, TouchableOpacity} from "react-native";
import {NavigationFunctionComponent} from "react-native-navigation";
import React from "react";
// import {useSelector} from "react-redux";
import Button from "../../common/components/new/Buttons/Button";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import {StyleSheet} from "react-native";

const VerifySMSScreen: NavigationFunctionComponent = () => {
  // const theme = useSelector((state) => state.theme);

  const handleResendCode = () => {
    console.log("Resend Code");
  };

  return (
    <View className={`flex-1 w-fit space-y-10 justify-between h-screen py-20 px-6 bg-white`}>
      <View className="w-full">
        <View className="w-full">
          <Text className={`text-2xl text-white md:text-2xl`}>Verify SMS code</Text>
        </View>

        <OTPInputView
          style={{
            width: "100%",
            height: 100,
          }}
          pinCount={4}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code: any) => {
            console.log(`Code is ${code}, you are good to go!`);
          }}
        />

        <View className="flex flex-row mr-24">
          <View className="w-full">
            <Text className={`text-white text-gray-dark`}>Had problems receiving code?</Text>
          </View>

          <TouchableOpacity onPress={handleResendCode}>
            <Text className={`text-background text-center`}>Resend My Code</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="w-full">
        <Button label="Verify" onPress={() => console.log("SignUpSuccess")} />
      </View>
    </View>
  );
};

export default VerifySMSScreen;

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
