import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const estrela = require("../assets/estrela.png");
const estrelaCinza = require("../assets/estrelaCinza.png");


interface IEstrela {
    aoPressionar: (() => void),
    desabilitada: boolean,
    preenchida: boolean,
    grande: boolean,
}

function Estrela({
    aoPressionar,
    desabilitada = true,
    preenchida,
    grande = false,
}: IEstrela) {
    const estilos = estilosFuncao(grande);

    const getImagem = () => {
        if (preenchida) {
            return estrela;
        }
        return estrelaCinza;
    }

    return <TouchableOpacity
        onPress={aoPressionar}
        disabled={desabilitada}
    >
        <Image source={getImagem()} style={estilos.estrela} />
    </TouchableOpacity>
}
export default Estrela;

const estilosFuncao = (grande: boolean) => StyleSheet.create({
    estrela: {
        width: grande ? 36 : 12,
        height: grande ? 36 : 12,
        marginRight: 2,
    }
});
