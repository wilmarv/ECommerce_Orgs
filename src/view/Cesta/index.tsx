import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Texto from '../../componentes/Texto';

import Topo from '../../componentes/Topo';
import useTextos from '../../hooks/useTextos';
import Cesta from '../../interfaces/cesta';
import Produtor from '../../interfaces/produtor';
import Textos from '../../interfaces/textos';
import Detalhes from './componentes/Detalhes';
import Item from './componentes/Item';

interface ICesta extends Cesta {
  produtor: Produtor,
}

export default function Cesta({ detalhes, itens, produtor }: ICesta) {
  const { topoCesta, tituloItens } = useTextos() as Textos;

  return <>
    <FlatList
      data={itens}
      renderItem={Item}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={() => {
        return <>
          <Topo titulo={topoCesta} />
          <View style={estilos.cesta}>
            <Detalhes {...detalhes} produtor={produtor} />
            <Texto style={estilos.titulo}>{tituloItens}</Texto>
          </View>
        </>
      }}
      style={estilos.lista}
    />
  </>
}

const estilos = StyleSheet.create({
  lista: {
    backgroundColor: '#ffffff',
  },
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
