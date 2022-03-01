import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity }  from "react-native";
import Estrelas from "./../../../components/Estrelas";

export default function Moeda({ nome, imagem, status, estrelas}) {

    const [selecionado, setSelecionado] = useState(false);

    return(
        <>
            <TouchableOpacity 
                style={estilos.card}
                onPress={() => setSelecionado(!selecionado)}
            >
                <Image source={ imagem } style={estilos.logo} accessibilityLabel={ nome } />
                <View style={estilos.info}>
                    <View>
                        <Text style={estilos.nome} >{ nome }</Text>
                        <Estrelas 
                            quantidade={ estrelas } 
                            editavel={  selecionado } 
                            grande={ selecionado }
                        />
                    </View>
                    <Text style={estilos.valor} >{ status }</Text>
                </View>
            </TouchableOpacity>
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
        elevation: 9,
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