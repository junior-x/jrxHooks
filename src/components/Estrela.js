import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

import estrela from "./../assets/estrela.png";
import estrelaCinza from "./../assets/estrelaCinza.png";

export default function Estrela({
    onPress,
    desabilitada = true,
    preenchida,
    grande = false,
}) {
    const estilos = estilosFuncao(grande);

    const getImagem = () => {
        if (preenchida) {
            return estrela;
        }
        return estrelaCinza;
    }

    return <TouchableOpacity
            onPress={onPress}
            disabled={desabilitada}
            >
            <Image source={getImagem()} style={estilos.estrelaStyle} />
        </TouchableOpacity>
}

const estilosFuncao = (grande) => StyleSheet.create({
    estrelaStyle: {
        height: grande ? 30 : 21,
        width: grande ? 30 : 21,
        marginVertical: grande ? 15 : 12,
        marginHorizontal: 3,
    }
});