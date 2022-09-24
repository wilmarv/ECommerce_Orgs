import { View, StyleSheet, Image } from "react-native";
import Button from "../../../components/Button";
import Texto from "../../../components/Texto";
import IDetalhes from "../../../interface/detalhes";

function Detalhes({ descricao, logoFazenda, nome, nomeFazenda, preco, botao }: IDetalhes): JSX.Element {
    return (
        <>
            <Texto style={styles.nome} children={nome} />

            <View style={styles.fazenda}>
                <Image style={styles.imagemFazenda} source={logoFazenda} />
                <Texto style={styles.nomeFazenda} children={nomeFazenda} />
            </View>

            <Texto style={styles.descricao} children={descricao} />
            <Texto style={styles.preco} children={preco} />
            <Button children={botao} />
        </>
    );
}
export default Detalhes;
const styles = StyleSheet.create({
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontWeight: "bold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
});