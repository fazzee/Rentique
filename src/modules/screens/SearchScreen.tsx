import React from "react";
import {NavigationFunctionComponent} from "react-native-navigation";
import {View, Text, ScrollView, Image} from "react-native";
import {TextInput} from "react-native-paper";
import MapLA from "../../../resources/images/mapLA.jpg";
import {useSelector} from "react-redux";
import {useForm, Controller} from "react-hook-form";
import {MagnifyingGlassIcon} from "react-native-heroicons/outline";

const SearchScreen: NavigationFunctionComponent = () => {
  // const theme = useSelector((state) => state.theme);

  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm();

  const onSubmit = (data: any) => console.log(data);

  return (
    <ScrollView className={`bg-white flex w-full py-14 flex-col px-6 space-y-7`}>
      <View className={`bg-gray-dark p-2`}>
        <View>
          <Text>Where?</Text>
        </View>
        <View className="flex space-y-2 flex-col my-2 w-full">
          <Controller
            control={control}
            name="location"
            rules={{required: "Enter location"}}
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                onBlur={onBlur}
                type="flat"
                label="Search location"
                selectionColor="#1D783B"
                activeUnderlineColor={"white"}
                textColor={"white"}
                underlineStyle={{
                  borderBottomColor: "white",
                  height: 0,
                }}
                onChangeText={onChange}
                value={value}
                className={`h-12 border w-full placeholder:text-red px-3 text-white bg-white border-white placeholder:text-white`}
                placeholder="Any location - Any day"
              />
            )}
          />

          <View className="absolute top-2 left-1">
            <MagnifyingGlassIcon color="#1D783B" size={20} />
          </View>

          {errors?.location && <Text className="text-red-500">{errors?.location?.message}</Text>}
        </View>

        <ScrollView horizontal={true}>
          <View className="flex space-x-2 flex-row my-2 w-full">
            <View className="flex flex-col space-y-1">
              <Image source={MapLA} className="w-[122px] h-[145px] bg-contain" resizeMode="cover" />
              <Text className={`text-black`}>Los Angles</Text>
            </View>

            <View className="flex flex-col space-y-1">
              <Image source={MapLA} className="w-[122px] h-[145px] bg-contain" resizeMode="cover" />
              <Text className={`text-black`}>New York</Text>
            </View>

            <View className="flex flex-col space-y-1">
              <Image source={MapLA} className="w-[122px] h-[145px] bg-contain" resizeMode="cover" />
              <Text className={`text-black`}>Las Vegas</Text>
            </View>

            <View className="flex flex-col space-y-1">
              <Image source={MapLA} className="w-[122px] h-[145px] bg-contain" resizeMode="cover" />
              <Text className={`text-black`}>Los Angles</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default SearchScreen;

SearchScreen.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    title: {
      text: "Search",
    },
  },
};
