import React from "react";
import {NavigationFunctionComponent} from "react-native-navigation";
import {View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import {useForm} from "react-hook-form";
import Tesla from "../../../resources/images/tesla.png";
import Mazda from "../../../resources/images/mazda.png";
import Bmw from "../../../resources/images/bmw.png";
import Audi from "../../../resources/images/audi.png";
import Mercedes from "../../../resources/images/mercedes.png";
import {carsData} from "../../common/data/carsData";
import DiscoverCard from "../../common/components/new/DiscoverCard";

const DiscoverScreen: NavigationFunctionComponent = () => {
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
      <Text className={`text-2xl text-black`}>Discover</Text>

      <View className="space-y-2">
        <TouchableOpacity onPress={() => console.log("Search")}>
          <View className={`flex flex-row space-x-2 items-center bg-white p-2 border`}>
            <View>
              <Text className={`text-lg text-black`}>Where?</Text>
              <Text className={`text-sm text-black`}>Any location - Any day</Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* Categories  */}
        <View className="flex flex-row flex-wrap justify-between">
          <TouchableOpacity className="bg-white w-fit p-2 drop-shadow-lg">
            <Image source={Tesla} className="w-8 h-8" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-white w-fit p-2 bg-contain">
            <Image source={Mazda} className="w-8 h-8 bg-contain" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-white w-fit p-2">
            <Image source={Bmw} className="w-8 h-8" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-white w-fit p-2">
            <Image source={Mercedes} className="w-8 h-8" />
          </TouchableOpacity>

          <TouchableOpacity className="bg-white w-fit p-2">
            <Image source={Audi} className="w-8 h-8" />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex flex-col space-y-5">
        <Text className={`text-xl text-black`}>Best Cars</Text>
        {/* Cars Cards  */}
        <View className="space-y-6 pb-14">
          {/* Car Card  */}
          {carsData?.map(
            (
              car: {
                name: string | undefined;
                imageUrl: string | undefined;
                country: string | undefined;
                freeMilage: number | undefined;
                deposit: number | undefined;
                value: number | undefined;
                rating: number | undefined;
                address: string | undefined;
                rent: number | undefined;
              },
              index: any,
            ) => (
              <View key={index} className="shadow-md relative">
                <DiscoverCard
                  theme={false}
                  name={car.name}
                  imgUrl={car.imageUrl}
                  country={car.country}
                  freeMilage={car.freeMilage}
                  deposit={car.deposit}
                  value={car.value}
                  rating={car.rating}
                  address={car.address}
                  rent={car.rent}
                  navigation={""}
                />
              </View>
            ),
          )}
        </View>
      </View>

      <View className="bg-green w-full h-[3rem] relative shadow-md shadow-green">
        <Text>Footer</Text>
      </View>
    </ScrollView>
  );
};

export default DiscoverScreen;

DiscoverScreen.options = {
  topBar: {
    largeTitle: {
      visible: true,
    },
    title: {
      text: "Discover",
    },
  },
};
