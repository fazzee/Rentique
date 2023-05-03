import React, {useState} from 'react';
import {View, Image, Text, Switch, TouchableOpacity} from 'react-native';
import {styled} from 'nativewind';
import {useSelector, useDispatch} from 'react-redux';
import {setTheme, signIn, createAccount} from '../actions';

const StyledView = styled(View);

const LoginScreen = ({navigation}) => {
  const theme = useSelector(state => state.theme);
  const user = useSelector(state => state.user); // Get user state from Redux
  const dispatch = useDispatch();

  const handleToggleTheme = () => dispatch(setTheme(!theme));

  const handleLogin = () => {
    console.log('signed in');
    // Perform login logic here

    const username = 'admin'; // Replace with your input values
    const password = 'password'; // Replace with your input values
    dispatch(signIn(username, password));
  };

  const handleRegister = () => {
    console.log('Registered');
    // Perform create account logic here
    const newUsername = 'newUser'; // Replace with your input values
    const newPassword = 'newPassword'; // Replace with your input values
    dispatch(createAccount(newUsername, newPassword));
  };

  return (
    <View className={`flex-1 items-center justify-end w-full h-screen`}>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        }} // Replace with your background image
        className="absolute w-full h-full bg-contain"
      />
      <View className="absolute w-full h-full bg-black/70" />

      <View className="absolute top-5 right-5">
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={theme ? '#00AC69' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={handleToggleTheme}
          value={theme}
        />
      </View>

      <View
        className={`w-full px-6 py-8 flex shadow-2xl ${
          theme ? 'bg-black' : 'bg-gray-100'
        }`}>
        <Text
          className={`text-2xl font-bold mb-6 ${
            theme ? 'text-gray-100' : 'text-black'
          }`}>
          Welcome to Rentique
        </Text>

        <StyledView className="flex flex-col gap-3">
          <TouchableOpacity onPress={handleLogin} className="bg-[#00AC69] p-4">
            <Text className="text-white font-extrabold text-center">
              Sign In
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleRegister}
            className="border border-[#00AC69] p-4">
            <Text className="text-[#00AC69] font-extrabold text-center">
              Create Account
            </Text>
          </TouchableOpacity>
        </StyledView>
      </View>
    </View>
  );
};

export default LoginScreen;
