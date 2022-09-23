import React from "react";
import { StyleSheet, View } from "react-native";
import Detalhes from "./componentes/Detalhes";
import Topo from "./componentes/Topo";
import ICesta from "../../interface/cesta"

function Cesta({ topo, detalhes }: ICesta) {
    return (
        <>
            <Topo {...topo} />

            <View style={styles.cesta}>
                <Detalhes {...detalhes} />
            </View>
        </>
    );
}
export default Cesta;
const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});