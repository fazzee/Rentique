import {Text, TouchableOpacity, View} from "react-native";
import React from "react";

interface ButtonProps {
  label: string;
  onPress: () => void;
  fullWidth?: boolean;
}

const Button = ({onPress, label, fullWidth = true}: ButtonProps) => {
  return (
    <View className="w-full">
      <TouchableOpacity onPress={onPress} className={`${fullWidth ? "w-full" : "w-fit px-8"} bg-green border mx-auto border-green py-4`}>
        <Text className={`text-white text-center`}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
