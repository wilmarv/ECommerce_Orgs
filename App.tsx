import { SafeAreaView, StyleSheet } from "react-native";
import useProdutores from "./src/hooks/useProdutores";
import Home from "./src/view/Home";

function App() {

  const produtores = useProdutores(false);

  return <SafeAreaView style={styles.tela}>
    <Home melhoresProdutores={false} />
  </SafeAreaView>
}

export default App;

const styles = StyleSheet.create({
  tela: {
    flex: 1
  },
});