import { useState, useEffect } from "react"
import { carregaMoedas } from "../servicos/carregaDados";

export default function useMoedas() {

    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const retorno = carregaMoedas();

        setTitulo(retorno.titulo);
        setLista(retorno.lista)
    }, []);
    
    return [titulo, lista]
}