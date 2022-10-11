import { useEffect } from "react";
import { Text } from "react-native";

import { carregaProdutores } from "../../../services/carregaDados"

function Produtores() {

    useEffect(() => {
        const returnor = carregaProdutores();
        console.log(returnor);
    }, []);

    return <Text>teste</Text>
}
export default Produtores;