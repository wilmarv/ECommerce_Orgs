import { SafeAreaView, StyleSheet } from "react-native";
import AppRotas from "./src/rotas/AppRotas";

function App() {
  return (
    <SafeAreaView style={styles.tela}>
      <AppRotas />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  tela: {
    flex: 1
  },
});