import { StatusBar, View } from 'react-native';
import { Icon } from '@commons/icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts, OpenSans_400Regular, OpenSans_500Medium, OpenSans_300Light, OpenSans_600SemiBold, OpenSans_700Bold} from "@expo-google-fonts/open-sans"
import { Poppins_400Regular, Poppins_500Medium, Poppins_300Light, Poppins_600SemiBold, Poppins_700Bold} from "@expo-google-fonts/poppins"
import { ProfileScreen, HomeScreen, ConversationsScreen, ConversationScreen, SettingsScreen } from '@screens';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MyStack() {
  return (
     <div></div>
  );
}

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
    <>
      <StatusBar barStyle={"light-content"}/>
    </>
  );
}