import { Image, StyleSheet, TouchableOpacity } from "react-native";

const estrela = require("../assets/estrela.png");
const estrelaCinza = require("../assets/estrelaCinza.png");

function Estrela({ onPress, desabilitada = true, preenchida, grande = false }: any) {

    const getImagem = () => {
        if (preenchida) {
            return estrela;
        }
        else return estrelaCinza;
    }

    return (
        <TouchableOpacity
            disabled={desabilitada}
            onPress={onPress}
            children={<Image style={styles(grande).estrela} source={getImagem()} />}
        />
    );
}
export default Estrela;

const styles = (grande: boolean) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2
    },
});