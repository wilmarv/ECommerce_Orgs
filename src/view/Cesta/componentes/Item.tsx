import { View, StyleSheet, Image, ListRenderItem } from "react-native";
import Texto from "../../../components/Texto";
import Item from "../../../interface/item";

type RenderItens = ListRenderItem<Item> | null | undefined;

const Itens: RenderItens = ({ item: { nome, imagem } }): JSX.Element => (
    <View style={styles.item}>
        <Image style={styles.imagem} source={imagem} />
        <Texto style={styles.nome} children={nome} />
    </View>
);
export default Itens;

const styles = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#ECECEC",
        paddingVertical: 16,
        marginHorizontal: 16,
        alignItems: "center",
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
});