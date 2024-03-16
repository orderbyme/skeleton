import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, OpenSans_400Regular, OpenSans_500Medium, OpenSans_300Light, OpenSans_600SemiBold, OpenSans_700Bold} from "@expo-google-fonts/open-sans"
import { Poppins_400Regular, Poppins_500Medium, Poppins_300Light, Poppins_600SemiBold, Poppins_700Bold} from "@expo-google-fonts/poppins"

export default function App() {

  let [fontsLoaded, fontError] = useFonts({
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_300Light,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_300Light,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <div></div>
  );
}