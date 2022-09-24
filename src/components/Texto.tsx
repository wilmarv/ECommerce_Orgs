import { Text, StyleSheet } from "react-native";
import React from "react";

function Texto({ children, style }: any) {
    const styleDefault = style?.fontWeight === "bold" ? styles.textoNegrito : styles.texto;

    return <Text style={[style, styleDefault]}>{children}</Text>
}
export default Texto;

const styles = StyleSheet.create({
    texto: {
        fontFamily: "MontserratRegular",
        fontWeight: "normal"
    },
    textoNegrito: {
        fontFamily: "MontserratBold",
        fontWeight: "normal"
    }
});