import React from 'react';
import { Image, StyleSheet, Dimensions, TouchableOpacity, ImageSourcePropType } from 'react-native';

import Texto from './Texto';

const Gradiente = require("../assets/gradiente.svg");
const topo = require("../assets/topo.png");
const VoltarSVG = require("../assets/voltar.svg");

const largura = Dimensions.get('screen').width;
const ALTURA_PADRAO = 270;

interface ITopo {
  titulo: string,
  imagem?: ImageSourcePropType,
  altura?: number
}

function Topo({ titulo, imagem = topo, altura = ALTURA_PADRAO }: ITopo) {
  const estilos = funcaoEstilos(altura);
  return <>
    <Image source={imagem} style={estilos.topo} />
    <Gradiente width={largura} height={130 / 360 * largura} style={estilos.gradiente} />
    <Texto style={estilos.titulo}>{titulo}</Texto>
    <TouchableOpacity
      onPress={() => { }}
      style={estilos.botaoVoltar}>
      <VoltarSVG color='white' style={estilos.voltar} />
    </TouchableOpacity>
  </>
}
export default Topo;

const funcaoEstilos = (altura: number) => StyleSheet.create({
  topo: {
    width: "100%",
    height: altura,
  },
  gradiente: {
    position: 'absolute',
  },
  titulo: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16,
  },
  botaoVoltar: {
    position: 'absolute',
    padding: 17,
  },
  voltar: {
    width: 24,
    height: 24,
  },
});
