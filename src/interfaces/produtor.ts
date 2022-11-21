import { ImageSourcePropType } from "react-native";
import Cesta from "./cesta";

interface Produtor {
    nome: string,
    imagem: ImageSourcePropType,
    distancia: number,
    estrelas: number,
    cestas: Array<Cesta>
}
export default Produtor;