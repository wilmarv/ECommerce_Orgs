import { useState, useEffect } from 'react';
import Textos from '../interfaces/textos';

import { carregaTextos } from '../servicos/carregaDados';

export default function useTextos() {
    const [textos, setTextos] = useState<Textos>({});

    useEffect(() => {
        const retorno = carregaTextos();
        setTextos(retorno);
    }, []);

    return textos;
}