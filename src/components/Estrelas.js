import React, { useState } from "react";
import { View, Image, StyleSheet, TouchableOpacity }  from "react-native";

import estrela from "./../assets/estrela.png";
import estrelaCinza from "./../assets/estrelaCinza.png";

export default function Estrelas({
    quantidade:  quantidadeAntiga,
    editavel = false,
    grande = false,
}) {

    const [ quantidade, setQuantidade ] = useState(quantidadeAntiga);
    const  estilos  = estilosFuncao(grande);

    const getImage = (index) => {
        if (index < quantidade ) {
            return estrela;
        }
        return estrelaCinza;
    };

    const RenderEstrelas = () => {
        const listaEstrelas = [];

        for (let i = 0; i < 5; i++) {
            listaEstrelas.push(
                <TouchableOpacity 
                    key={i}
                    onPress={() =>  setQuantidade( i + 1 )}
                    disabled={!editavel} 
                >
                    <Image source={ getImage(i) } style={ estilos.estrelaStyle } />
                </TouchableOpacity>
            );
        }
        return listaEstrelas;
    };

    return(
        <>
            <View style={ estilos.estrelas } >
                <RenderEstrelas />
            </View>
        </>
    );
};

const estilosFuncao = (grande) => StyleSheet.create({
    estrelas: {
        flexDirection: "row",
    },
    estrelaStyle: {
        height:grande? 30 : 21,
        width: grande? 30 : 21,
        marginVertical: grande? 15 : 12,
        marginHorizontal: 3,
    }
});