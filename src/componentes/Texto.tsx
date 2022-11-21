import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

export default function Texto({ children, style }: any) {
  let estilo: TextStyle = estilos.texto;

  if (style?.fontWeight === 'bold') {
    estilo = estilos.textoNegrito;
  }

  return <Text style={[style, estilo]}>{children}</Text>
}

const estilos = StyleSheet.create({
  texto: {
    // fontFamily: 'MontserratRegular',
    fontWeight: 'normal',
  },
  textoNegrito: {
    // fontFamily: 'MontserratBold',
    fontWeight: 'bold',
  }
});
