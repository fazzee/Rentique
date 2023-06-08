import {Text, View} from "react-native";
import {NavigationFunctionComponent} from "react-native-navigation";
import React, {useState} from "react";
// import {useSelector} from "react-redux";
import Button from "../../common/components/new/Buttons/Button";
import {useForm, Controller} from "react-hook-form";
import {Navigation} from "react-native-navigation";
import {TextInput} from "react-native-paper";
import {Pages} from "../../navigation/pages";

const SignInScreen: NavigationFunctionComponent = () => {
  // const theme = useSelector((state) => state.theme);
  // const [phoneInput, setPhoneInput] = useState("");

  // const handletwoFA = () => {
  //   Navigation.push("MainStackRoot", {
  //     component: {
  //       name: Pages.twoFA.name,
  //     },
  //   });
  // };

  const {
    control,
    // handleSubmit,
    formState: {errors},
    // watch,
  } = useForm();

  const onSubmit = () => {
    Navigation.push("MainStackRoot", {
      component: {
        name: Pages.twoFA.name,
      },
    });
  };

  return (
    <View className={`bg-white flex-1 w-full justify-between h-screen py-20 px-6`}>
      <View className="flex flex-col space-y-5 w-full">
        <View>
          <Text className={`text-2xl text-black md:text-2xl`}>Sign In</Text>
        </View>

        <View>
          <View className="flex space-y-2 flex-col my-2 w-full">
            <Controller
              control={control}
              name="phone"
              rules={{required: "Phone number is required"}}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  type="flat"
                  label="Phone number"
                  selectionColor="#1D783B"
                  placeholder="Enter phone number"
                  activeUnderlineColor={"white"}
                  textColor={"black"}
                  underlineStyle={{
                    height: 0,
                    borderBottomColor: "white",
                  }}
                  onChangeText={onChange}
                  value={value}
                  className={`h-12 border w-full px-3 text-black bg-white placeholder:text-black`}
                />
              )}
            />
            {errors?.phone && <Text className="text-red-500">{errors?.phone?.message}</Text>}
          </View>
        </View>
      </View>

      <View className="w-full">
        <Button
          label="Next"
          onPress={onSubmit}
          // onPress={() => console.log("TwoFA")}
        />
      </View>
    </View>
  );
};

export default SignInScreen;

SignInScreen.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    title: {
      text: "SignIn",
    },
  },
};
