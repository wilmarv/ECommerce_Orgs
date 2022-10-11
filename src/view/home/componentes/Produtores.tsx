import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import { carregaProdutores } from "../../../services/carregaDados"
import Produtor from "./Produtor";

interface IParams {
    topo: any
}

function Produtores({ topo: Topo }: IParams) {

    const [titulo, setTitulo] = useState<String>("");
    const [lista, setLista] = useState<Array<any>>([]);

    useEffect(() => {
        const produtores = carregaProdutores();
        setTitulo(produtores.titulo);
        setLista(produtores.lista);
    }, []);

    const TopoLista = () => {
        return (
            <>
                <Topo />
                <Text style={styles.titulo}>{titulo}</Text>
            </>
        );
    };

    return (
        <FlatList
            data={lista}
            ListHeaderComponent={TopoLista}
            keyExtractor={({ nome }) => nome}
            renderItem={({ item }) => <Produtor {...item} />}
            style={{ backgroundColor: "white" }}
        />
    );
}
export default Produtores;

const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: "bold",
        color: "#464646"
    },
});