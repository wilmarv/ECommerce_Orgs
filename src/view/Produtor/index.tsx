import { useRoute } from "@react-navigation/native";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Topo from "../../componentes/Topo";
import useTextos from "../../hooks/useTextos";
import Cesta from "./componentes/Cesta";

function Produtor() {

    const route = useRoute();
    const { tituloProdutor, tituloCestas } = useTextos();
    const { nome, imagem, cestas } = route.params;
    const topo = require("../../assets/produtores/topo.png");

    const TopoLista = () => {
        return (
            <>
                <Topo titulo={tituloProdutor} imagem={topo} altura={150} />
                <View style={estilos.conteudo}>
                    <View style={estilos.logo}>
                        <Image source={imagem} style={estilos.produtorImage} />
                        <Text style={estilos.produtor}>{nome}</Text>
                    </View>
                </View>
                <Text style={estilos.cestas}>{tituloCestas}</Text>
            </>);
    }

    return (
        <FlatList
            ListHeaderComponent={TopoLista}
            data={cestas}
            renderItem={({ item }) => <Cesta {...item} produtor={{ nome, imagem }} />}
            style={estilos.lista}
        />
    );
}
export default Produtor;

const estilos = StyleSheet.create({
    lista: {
        backgroundColor: '#ffffff',
    },
    conteudo: {
        paddingHorizontal: 16,
    },
    logo: {
        flexDirection: 'row',
    },
    produtorImage: {
        width: 62,
        height: 62,

        marginTop: -23,

        borderRadius: 6,
    },
    produtor: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    cestas: {
        color: '#464646',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
        marginTop: 32,
    }
});