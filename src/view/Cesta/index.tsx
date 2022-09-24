import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Detalhes from "./componentes/Detalhes";
import Topo from "./componentes/Topo";
import ICesta from "../../interface/cesta"
import Item from "./componentes/Item";
import Texto from "../../components/Texto";

function Cesta({ topo, detalhes, itens }: ICesta) {
    return (
        <>
            <FlatList
                data={itens.lista}
                renderItem={Item}
                keyExtractor={({ nome }) => nome}
                ListHeaderComponent={() => {
                    return <>
                        <Topo {...topo} />

                        <View style={styles.cesta}>
                            <Detalhes {...detalhes} />
                            <Texto style={styles.titulo} children={itens.titulo} />
                        </View>
                    </>
                }}
            />
        </>
    );
}
export default Cesta;
const styles = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32
    },
});