import React, { useEffect, useState } from "react";
import { Text, FlatList, StyleSheet } from "react-native";
import { carregaMoedas } from "../../../servicos/carregaDados";
import Moeda from "./Moeda";

export default function  Moedas() {

    const [titulo, setTitulo ] = useState('');
    const [lista, setLista ] = useState([]);

    useEffect(() => {
        const retorno = carregaMoedas();
        
        setTitulo(retorno.titulo);
        setLista(retorno.lista)
    }, []);

    const TopoLista = () => {
        return(<Text style={ estilos.titulo }>{ titulo }</Text>)
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