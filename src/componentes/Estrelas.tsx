import { useState } from "react";
import { Image, StyleSheet, Touchable, TouchableOpacity, View } from "react-native";

const estrela = require("../assets/estrela.png");
const estrelaCinza = require("../assets/estrelaCinza.png");

function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,
}: any) {

    const [quantidade, setQuantidade] = useState<number>(quantidadeAntiga);

    const getImage = (index: number) => {
        if (index < quantidade) {
            return estrela;
        }
        else return estrelaCinza;
    }

    const RenderEstrelas = (): any => {
        const listaEstrelas: Array<JSX.Element> = [];
        for (let i = 0; i < 5; i++) {
            listaEstrelas.push(
                <TouchableOpacity
                    key={i}
                    disabled={!editavel}
                    onPress={() => setQuantidade(i + 1)}
                    children={<Image style={styles(grande).estrela} source={getImage(i)} />}
                />

            );
        }
        return listaEstrelas;
    }

    return (
        <View style={styles(grande).estrelas}>
            <RenderEstrelas />
        </View>
    );
}
export default Estrelas;

const styles = (grande: boolean) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2
    },
    estrelas: {
        flexDirection: "row"
    }
});