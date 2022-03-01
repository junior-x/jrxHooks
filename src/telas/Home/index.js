import React from "react";
import { StyleSheet } from "react-native";
import Moedas from "./components/Moedas";
import Topo from "./components/Topo";

export default function Home() {

    return(
        <>
            <Topo />
            <Moedas style={ estilos.moedas } />
        </>
    );
};

const estilos = StyleSheet.create({
    moedas: {
        flex: 1,
    }
});