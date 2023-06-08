import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styled} from 'nativewind';

const StyledView = styled(View);

interface ButtonProps {
  label: string;
  onPress: () => void;
  fullWidth?: boolean;
  theme: boolean;
}

const OutlineButton = ({
  onPress,
  label,
  fullWidth = true,
  theme = false,
}: ButtonProps) => {
  return (
    <StyledView className="w-full">
      <TouchableOpacity
        onPress={onPress}
        className={`${fullWidth ? 'w-full' : 'w-fit px-8'} ${
          theme ? 'bg-black border-white' : 'bg-white border-green'
        } border mx-auto py-4`}>
        <Text className={`${theme ? 'text-white' : 'text-green'} text-center`}>
          {label}
        </Text>
      </TouchableOpacity>
    </StyledView>
  );
};

export default OutlineButton;
