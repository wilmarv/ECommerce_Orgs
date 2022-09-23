import { TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Texto from "./Texto";

function Button({ children, style }: any) {
    return (
        <TouchableOpacity
            style={[style, styles.botao]}
            children={
                <Texto style={styles.textoBotao} children={children} />
            } />
    );
}
export default Button;

const styles = StyleSheet.create({
    botao: {
        marginTop: 16,
        backgroundColor: "#2A9F85",
        paddingVertical: 16,
        borderRadius: 6
    },
    textoBotao: {
        textAlign: "center",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        lineHeight: 26
    }
});