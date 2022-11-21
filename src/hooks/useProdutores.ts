import { useState, useEffect } from 'react';
import Produtor from '../interfaces/produtor';
import Produtores from '../interfaces/produtores';

import { carregaProdutores } from '../servicos/carregaDados';

export default function useProdutores(melhoresProdutores: boolean) {
    const [lista, setLista] = useState<Array<Produtor>>([]);

    useEffect(() => {
        const retorno = carregaProdutores();
        retorno.lista.sort(
            (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
        );
        let novaLista: Array<Produtor> = retorno.lista;

        if (melhoresProdutores) {
            novaLista = novaLista.filter(
                (produtor) => produtor.estrelas > 3
            );
        }
        setLista(novaLista);
    }, []);

    return lista;
}
