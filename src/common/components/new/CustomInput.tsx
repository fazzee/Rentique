import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {styled} from 'nativewind';
import {Control, Controller, FieldErrors, FieldValues} from 'react-hook-form';

const StyledView = styled(View);

interface CustomInputProps {
  label: string;
  value: string;
  inputMode: string;
  errors: FieldErrors<FieldValues>;
  placeholder: string;
  required: boolean;
  onChangeText: any;
  control: Control<FieldValues, any>;
  theme?: boolean;
  mode: string;
  name: string;
}

const CustomInput = ({
  value,
  inputMode,
  errors,
  placeholder,
  required,
  label,
  onChangeText,
  control,
  theme = false,
  name,
}: CustomInputProps) => {
  return (
    <StyledView className="flex gap-y-2 flex-col my-2 w-full">
      <Controller
        control={control}
        name="phone"
        rules={{required: 'First name is required'}}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            onBlur={onBlur}
            type="flat"
            label="Phone number"
            selectionColor="#1D783B"
            activeUnderlineColor={theme ? 'white' : 'black'}
            textColor={theme ? 'white' : 'black'}
            underlineStyle={{
              borderRadius: 0,
              // borderBottomWidth: 1,
              borderBottomColor: theme ? 'white' : 'black',
            }}
            onChangeText={onChange}
            value={value}
            className={`h-12 border w-full placeholder:text-red px-3 ${
              theme
                ? 'text-white bg-black border-white placeholder:text-white'
                : 'text-black bg-white border-black'
            }`}
            placeholder="Enter first name"
          />
        )}
      />
      {errors?.phone && (
        <Text className="text-red-500">{errors?.phone?.message}</Text>
      )}
    </StyledView>
  );
};

export default CustomInput;
