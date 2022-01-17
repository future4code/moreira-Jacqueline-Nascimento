import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";



export default class Etapa3 extends React.Component{

    render() {
        return(
            <div>
                <h2>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
                <form action="#">
                    <ul>
                        <li>
                            <PerguntaAberta pergunta={"Por que você não terminou um curso de graduação?"} />
                        </li>
                        <li>
                            <PerguntaFechada pergunta={"Você fez algum curso complementar?"}
                                lista = {["Nenhum",
                                        "Curso técnico",
                                        "Curso de inglês"]}
                            />
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}