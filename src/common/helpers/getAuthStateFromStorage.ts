import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAuthStateFromStorage = async (): Promise<boolean> => {
  const isAuthenticatedString = await AsyncStorage.getItem("isAuthenticated");
  return isAuthenticatedString ? JSON.parse(isAuthenticatedString) : false;
};
