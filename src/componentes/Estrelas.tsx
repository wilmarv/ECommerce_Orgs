import React, { useState } from "react";
import { View, StyleSheet } from 'react-native';

import Estrela from './Estrela';

interface IEstrelas {
    quantidade: number,
    editavel?: boolean,
    grande?: boolean,
}

function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,
}: IEstrelas) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga);

    const RenderEstrelas = (): any => {
        const listaEstrelas = [];
        for (let i = 0; i < 5; i++) {
            listaEstrelas.push(
                <Estrela
                    key={i}
                    aoPressionar={() => setQuantidade(i + 1)}
                    desabilitada={!editavel}
                    preenchida={i < quantidade}
                    grande={grande} />
            );
        }

        return listaEstrelas;
    }

    return <View style={estilos.estrelas}>
        <RenderEstrelas />
    </View>
}
export default Estrelas;

const estilos = StyleSheet.create({
    estrelas: {
        flexDirection: 'row',
    },
});
