import { ImageURISource } from "react-native";

const cesta: CestaParams = {
    topo: {
        titulo: "Detalhe da cesta",
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: require("../../assets/logo.png"),
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados "
            + "cuidadozamente da fazenda direto para dua cozinha",
        preco: "R$ 20,00"
    }
}
export default cesta;

export interface CestaParams {
    topo: TopoParams,
    detalhes: DetalhesParams
};
export interface TopoParams {
    titulo: string,
};
export interface DetalhesParams {
    nome: string,
    logoFazenda: ImageURISource,
    nomeFazenda: string,
    descricao: string,
    preco: string,
}