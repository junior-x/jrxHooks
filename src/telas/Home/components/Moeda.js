import React from "react";
import { View, Text, Image, StyleSheet }  from "react-native";

export default function Moeda({ nome, imagem, status, estrelas}) {
    return(
        <>
            <View style={estilos.card}>
                <Image source={ imagem } style={estilos.logo} accessibilityLabel={ nome } />
                <View style={estilos.info}>
                    <Text style={estilos.nome} >{ nome }</Text>
                    <Text style={estilos.valor} >{ status }</Text>
                </View>
            </View>
        </>
    );
};

const estilos = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "#F6F6F6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
        /// Android
        elevation: 6,
        /// IOs
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    logo: {
        width: 69,
        height: 69,
        marginVertical: 16,
        marginLeft: 16,
    },
    info: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 12,
        marginRight: 18,
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold",
    },
    valor: {
        fontSize: 12,
        lineHeight: 19,
    }
});