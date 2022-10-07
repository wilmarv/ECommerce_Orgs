import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Assents from "../../../contants/assents";
import { carregaTopo } from "../../../services/carregaDados";

class Topo extends React.Component {

    state = {
        topo: {
            boasVindas: "",
            legenda: "",
        }
    }

    atualizaTopo() {
        this.setState({ topo: carregaTopo() })
    }

    componentDidMount(): void {
        this.atualizaTopo();
    }

    render(): React.ReactNode {
        return (
            <View style={styles.topo}>
                <Image style={styles.image} source={Assents.topo} />
                <Text style={styles.boasVindas}>{this.state.topo.boasVindas}</Text>
                <Text style={styles.legenda}>{this.state.topo.legenda}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topo: {
        backgroundColor: "#F6F6F6",
        padding: 16,
    },
    image: {
        width: 70,
        height: 28
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26
    }
});

export default Topo;