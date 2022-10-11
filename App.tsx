import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./src/view/home";

function App() {
  return <SafeAreaView style={styles.tela}>
    <Home />
  </SafeAreaView>
}

export default App;

const styles = StyleSheet.create({
  tela: {
    flex: 1
  },
});