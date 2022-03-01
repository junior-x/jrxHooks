import React from "react";
import Moedas from "./components/Moedas";
import Topo from "./components/Topo";

export default function Home() {

    return(
        <>
            <Moedas topo={Topo} />
        </>
    );
};