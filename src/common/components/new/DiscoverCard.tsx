import {View, Text, Image, TouchableOpacity} from "react-native";
import React, {useState} from "react";
import Outline from "./Heroicons/Heart/Outline";
import Solid from "./Heroicons/Heart/Solid";
import {StarIcon} from "react-native-heroicons/solid";

interface DiscoverCardProps {
  theme?: boolean;
  name?: string;
  imgUrl?: string;
  country?: string;
  freeMilage?: number;
  deposit?: number;
  value?: number;
  rating?: number;
  address?: string;
  rent?: number;
  navigation?: any;
  favorite?: boolean;
}

const DiscoverCard = ({
  theme,
  name,
  imgUrl,
  country,
  freeMilage,
  deposit,
  value,
  rating,
  address,
  rent,
  favorite,
  navigation,
}: DiscoverCardProps): JSX.Element => {
  const [favoriteIcon, setFavoriteIcon] = useState(favorite);
  return (
    <TouchableOpacity>
      <View className={`bg-gray-dark shadow-lg`}>
        <Image
          source={{
            uri: imgUrl,
          }}
          className="w-full h-48 bg-contain"
        />

        <TouchableOpacity onPress={() => setFavoriteIcon(!favoriteIcon)} className="absolute top-2 right-2">
          {favoriteIcon ? <Solid /> : <Outline />}
        </TouchableOpacity>

        <View className="p-3">
          <Text className={`text-xl text-white`}>{name}</Text>

          <View className="flex flex-row items-center space-x-1 justify-between">
            <View className="flex flex-row space-x-1">
              <Text className={`text-xs text-white`}>Country:</Text>
              <Text className={`text-xs text-white`}>{country}</Text>
            </View>

            <View className="flex flex-row space-x-1">
              <Text className={`text-xs text-white`}>Free:</Text>
              <Text className={`text-xs text-white`}>{freeMilage} km/day</Text>
            </View>

            <View className="flex flex-row space-x-1">
              <Text className={`text-xs text-white`}>Deposit:</Text>
              <Text className={`text-xs text-white`}>${deposit}</Text>
            </View>

            <View className="flex flex-row space-x-1">
              <Text className={`text-sm text-white`}>Value:</Text>
              <Text className={`text-sm text-white`}>{value}</Text>
            </View>
          </View>
        </View>

        <View className="flex flex-row justify-between items-center p-3 border-t border-gray/70">
          <View className="flex flex-row items-center justify-center space-x-1">
            <Text className={`text-xs text-white`}>{rating}</Text>
            <View className={`text-xs text-white w-5 h-5`}>
              <StarIcon color="black" size={15} />
            </View>
            <Text className={`text-xs text-white`}>{address}</Text>
          </View>

          <View className="flex flex-row space-x-1">
            <Text className={`text-xs font-bold text-white`}>${rent}</Text>
            <Text className={`text-xs text-white`}>/day</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DiscoverCard;
