import React from "react";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaFechada from "./PerguntaFechada";



export default class Etapa1 extends React.Component{

    render() {
        return(
            <div>
                <h2>ETAPA 1 - DADOS GERAIS</h2>
                <form action="#">
                    <ul>
                        <li>
                            <PerguntaAberta pergunta={"Qual o seu nome?"} />
                        </li>
                        <li>
                            <PerguntaAberta pergunta={"Qual a sua idade?"} />
                        </li>
                        <li>
                            <PerguntaAberta pergunta={"Qual o seu email?"} />
                        </li>
                        <li>
                            <PerguntaFechada pergunta={"Qual a sua escolaridade?"}
                            lista = {["Ensino Médio Incompleto",
                                    "Ensino Médio Completo",
                                    "Ensino Superior Incompleto",
                                    "Ensino Superior Completo"]}
                            />
                        </li>
                    </ul>
                </form>
            </div>
        )
    }
}