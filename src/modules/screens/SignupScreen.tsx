import {View, Text} from "react-native";
import {Navigation, NavigationFunctionComponent} from "react-native-navigation";
import {TextInput} from "react-native-paper";
import React, {useState} from "react";
// import {useSelector} from "react-redux";
import Button from "../../common/components/new/Buttons/Button";
import {useForm, Controller} from "react-hook-form";
import {Pages} from "../../navigation/pages";

const SignupScreen: NavigationFunctionComponent = () => {
  // const theme = useSelector((state) => state.theme);
  const [phoneInput, setPhoneInput] = useState("");

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const onSubmit = () => {
    Navigation.push("MainStackRoot", {
      component: {
        name: Pages.signUpSuccess.name,
      },
    });
  };

  return (
    <View className={`bg-white  flex-1 w-full justify-between h-screen py-20 px-6`}>
      <View className="flex flex-col space-y-5 w-full">
        <View>
          <Text className={`text-2xl text-green md:text-2xl`}>Create Account</Text>
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
                  activeUnderlineColor={"white"}
                  textColor={"white"}
                  underlineStyle={{
                    borderBottomColor: "white",
                    height: 0,
                  }}
                  onChangeText={onChange}
                  value={value}
                  className={`h-12 border w-full px-3 text-black bg-white placeholder:text-black`}
                  placeholder="Enter phone number"
                />
              )}
            />
            {errors?.phone && <Text className="text-red-500">{errors?.phone?.message}</Text>}
          </View>

          <View className="flex space-y-2 flex-col my-2 w-full">
            <Controller
              control={control}
              name="email"
              rules={{required: "Email is required"}}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  type="flat"
                  label="Email"
                  selectionColor="#1D783B"
                  activeUnderlineColor={"white"}
                  textColor={"white"}
                  underlineStyle={{
                    height: 0,
                    borderBottomColor: "white",
                  }}
                  onChangeText={onChange}
                  value={value}
                  className={`h-12 border w-full px-3 text-black bg-white placeholder:text-black`}
                  placeholder="Enter email"
                />
              )}
            />
            {errors?.email && <Text className="text-red-500">{errors?.email?.message}</Text>}
          </View>

          <View className="flex space-y-2 flex-col my-2 w-full">
            <Controller
              control={control}
              name="firstName"
              rules={{required: "First name is required"}}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  type="flat"
                  label="First name"
                  selectionColor="#1D783B"
                  activeUnderlineColor={"white"}
                  textColor={"white"}
                  underlineStyle={{
                    height: 0,
                    borderBottomColor: "white",
                  }}
                  onChangeText={onChange}
                  value={value}
                  className={`h-12 border w-full px-3 text-black bg-white placeholder:text-black`}
                  placeholder="Enter first name"
                />
              )}
            />
            {errors?.firstName && <Text className="text-red-500">{errors?.firstName?.message}</Text>}
          </View>

          <View className="flex space-y-2 flex-col my-2 w-full">
            <Controller
              control={control}
              name="lastName"
              rules={{required: "Last name is required"}}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  onBlur={onBlur}
                  type="flat"
                  label="Last name"
                  selectionColor="#1D783B"
                  activeUnderlineColor={"white"}
                  textColor={"white"}
                  underlineStyle={{
                    height: 0,
                    borderBottomColor: "white",
                  }}
                  onChangeText={onChange}
                  value={value}
                  className={`h-12 border w-full px-3 text-black bg-white placeholder:text-black`}
                  placeholder="Enter last name"
                />
              )}
            />
            {errors?.lastName && <Text className="text-red-500">{errors?.lastName?.message}</Text>}
          </View>
        </View>
      </View>

      <View className="w-full">
        <Button label="Next" onPress={onSubmit} />
      </View>
    </View>
  );
};

export default SignupScreen;

SignupScreen.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    title: {
      text: "Signup",
    },
  },
};
