import bitcoin from '../assets/moedas/bit1.png';
import binance from '../assets/moedas/bit2.png';
import ethereum from '../assets/moedas/bit3.png';
import ripple from '../assets/moedas/bit4.png';
import litecoin from '../assets/moedas/bit5.png';

const gerarNumeroAleatorio = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const Moedas = {
    titulo: "Moedas",
    lista: [
        {
            nome: "Bitcoin (BTC)",
            imagem: bitcoin,
            status: gerarNumeroAleatorio(1, 5000),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Ethereum (ETH)",
            imagem: ethereum,
            status: gerarNumeroAleatorio(1, 5000),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Litecoin (LTC)",
            imagem: litecoin,
            status: gerarNumeroAleatorio(1, 5000),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Ripple (XRP)",
            imagem: ripple,
            status: gerarNumeroAleatorio(1, 5000),
            estrelas: gerarNumeroAleatorio(1, 5),
        },
        {
            nome: "Binance coin (BNB)",
            imagem: binance,
            status: gerarNumeroAleatorio(1, 5000),
            estrelas: gerarNumeroAleatorio(1, 5),
        }
    ]
}

export default Moedas;