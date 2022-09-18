import React from "react";
import { Image, StyleSheet, Dimensions, Text, View } from "react-native";

const width = Dimensions.get('screen').width;

function Cesta() {
    return (
        <>
            <Image source={require("../../assets/topo.png")} style={styles.topo} />
            <Text style={styles.titulo}>Detalhe da cesta</Text>

            <View style={styles.cesta}>
                <Text style={styles.nome}>Cesta de verduras</Text>

                <View style={styles.fazenda}>
                    <Image style={styles.imagemFazenda} source={require("../../assets/logo.png")} />
                    <Text style={styles.nomeFazenda}>Jenny Jack Farm</Text>
                </View>

                <Text style={styles.descricao}>Uma cesta com produtos selecionados cuidadozamente da fazenda direto para dua cozinha</Text>
                <Text style={styles.preco}>R$ 40,00</Text>
            </View>

        </>
    );
}
export default Cesta;

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "MontserratBold"
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
        fontFamily: "MontserratRegular"
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
    }
});