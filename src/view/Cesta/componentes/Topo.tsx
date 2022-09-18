import { Image, StyleSheet, Dimensions } from "react-native";
import Texto from "../../../components/Texto";
import { TopoParams } from "../../../mocks/cesta";

const width = Dimensions.get('screen').width;

function Topo({ titulo }: TopoParams) {
    return (
        <>
            <Image source={require("../../../../assets/topo.png")} style={styles.topo} />
            <Texto style={styles.titulo}>{titulo}</Texto>
        </>
    );
}
export default Topo;

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
})