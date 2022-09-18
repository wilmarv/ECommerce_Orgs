import React from "react";
import { Image, StyleSheet, Dimensions, Text } from "react-native";

const width = Dimensions.get('screen').width;

function Cesta() {
    return (
        <>
            <Image source={require("../../assets/topo.png")} style={styles.topo} />
            <Text style={styles.titulo}>Detalhe da cesta</Text>

        </>
    );
}
export default Cesta;

const styles = StyleSheet.create({
    topo: {
        width: "100%",
        height: 578 / 768 * width
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
    }
});