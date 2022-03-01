import React from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import useMoedas from "../../../hooks/useMoedas";
import Moeda from "./Moeda";

export default function  Moedas( {topo: Topo}) {

    const[titulo, lista] = useMoedas();

    const TopoLista = () => {
        return(
            <>
                <Topo />
                <Text style={ estilos.titulo }>{ titulo }</Text>
            </>
        )
    }

    return(
        <>
            <FlatList
                data={lista}
                keyExtractor={({nome}) => nome }
                renderItem={({ item }) => <Moeda { ...item } /> }
                ListHeaderComponent={ TopoLista }
            />
        </>
    );
};

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
    },
});