import { Image, StyleSheet, Text, View } from "react-native";

interface IProdutor {
    nome: string,
    imagem: any,
    distancia: number,
    estrelas: number
}

function Produtor({ nome, imagem, distancia, estrelas }: IProdutor) {
    return (
        <View style={styles.cartao}>
            <Image style={styles.image} source={imagem} accessibilityLabel={nome} />
            <View style={styles.informacoes}>
                <Text style={styles.nome}>{nome}</Text>
                <Text style={styles.distancia}>{distancia}</Text>
            </View>
        </View>
    );
}
export default Produtor;

const styles = StyleSheet.create({
    cartao: {
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 6,
        flexDirection: "row",
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16
    },
    informacoes: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold",
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19,
    }
});