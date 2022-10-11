import { useState, useEffect } from 'react';
import { carregaProdutores } from '../services/carregaDados';

function useProdutores() {
    const [titulo, setTitulo] = useState<String>("");
    const [lista, setLista] = useState<Array<any>>([]);

    useEffect(() => {
        const produtores = carregaProdutores();
        setTitulo(produtores.titulo);
        setLista(produtores.lista);
    }, []);


    return [titulo, lista];
}
export default useProdutores;