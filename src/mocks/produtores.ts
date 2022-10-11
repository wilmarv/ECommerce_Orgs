import Assents from "../contants/assents";

const gerarNumeroAleatorio = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = {
    titulo: "Produtores",
    lista: [
        {
            nome: "Green",
            imagem: Assents.produtores.green,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Salad",
            imagem: Assents.produtores.salad,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Jenny Jack Farm",
            imagem: Assents.produtores.jennyJack,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Grow",
            imagem: Assents.produtores.grow,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Potager",
            imagem: Assents.produtores.potager,
            distancia: `${gerarNumeroAleatorio(1, 500)}m`,
            estrelas: gerarNumeroAleatorio(1, 5),
        }
    ]
}

export default produtores;