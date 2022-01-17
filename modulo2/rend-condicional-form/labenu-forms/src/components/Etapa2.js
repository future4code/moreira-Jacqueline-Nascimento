import React from "react";
import PerguntaAberta from "./PerguntaAberta";



export default class Etapa2 extends React.Component{

    render() {
        return(
            <div>
                <h2>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h2>
                <form action="#">
                    <ul>
                        <li>
                            <PerguntaAberta pergunta={"Qual curso?"} />
                        </li>
                        <li>
                            <PerguntaAberta pergunta={"Qual a unidade de ensino?"} />
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}