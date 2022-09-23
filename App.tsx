import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { View, StatusBar } from 'react-native';
import Cesta from "./src/view/Cesta";
import mock from "./src/mocks/cesta";


export default function App() {

  const [fontCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fontCarregada) {
    return <AppLoading />
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#000" />
      <Cesta {...mock} />
    </View>
  );
}