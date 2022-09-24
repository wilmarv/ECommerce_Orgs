import Cesta from "../interface/cesta";

const cesta: Cesta = {
    topo: {
        titulo: "Detalhe da cesta",
    },
    detalhes: {
        nome: "Cesta de Verduras",
        logoFazenda: require('../../assets/logo.png'),
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        preco: "R$ 40,00",
        botao: "Comprar",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
            {
                nome: "Tomate",
                imagem: require('../../assets/frutas/Tomate.png'),
            },
            {
                nome: "Brócolis",
                imagem: require('../../assets/frutas/Brócolis.png'),
            },
            {
                nome: "Batata",
                imagem: require('../../assets/frutas/Batata.png'),
            },
            {
                nome: "Pepino",
                imagem: require('../../assets/frutas/Pepino.png'),
            },
            {
                nome: "Abóbora",
                imagem: require('../../assets/frutas/Abóbora.png'),
            }
        ]
    }
}
export default cesta;