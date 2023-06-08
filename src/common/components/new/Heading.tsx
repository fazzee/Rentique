import React from 'react';
import {View, Text} from 'react-native';
import {styled} from 'nativewind';

const StyledView = styled(View);

interface HeadingProps {
  text: string;
  theme?: boolean;
}

const Heading = ({text, theme}: HeadingProps): JSX.Element => {
  return (
    <StyledView className="w-full">
      <Text className={`text-2xl mb-6 ${theme ? 'text-white' : 'text-black'}`}>
        {text}
      </Text>
    </StyledView>
  );
};

export default Heading;
