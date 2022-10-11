import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Estrela from "./Estrela";

function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,
}: any) {

    const [quantidade, setQuantidade] = useState<number>(quantidadeAntiga);

    const RenderEstrelas = (): any => {
        const listaEstrelas: Array<JSX.Element> = [];
        for (let i = 0; i < 5; i++) {
            listaEstrelas.push(
                <Estrela
                    onPress={() => setQuantidade(i + 1)}
                    desabilitada={!editavel}
                    preenchida={i < quantidade}
                    grande={grande}
                />
            );
        }
        return listaEstrelas;
    }

    return (
        <View style={styles.estrelas}>
            <RenderEstrelas />
        </View>
    );
}
export default Estrelas;

const styles = StyleSheet.create({
    estrelas: {
        flexDirection: "row"
    }
});