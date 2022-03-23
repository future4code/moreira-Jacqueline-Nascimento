import { checaTriangulo } from "./exercicio1";
import { imprimeTresCoresFavoritas } from "./exercicio2";
import { checaAnoBissexto } from "./exercicio3";
import { comparaDoisNumeros } from "./exercicio4";
import { checaRenovacaoRG } from "./exercicio5";
import { operacoesEntreDoisNumeros } from "./exercicio6"

console.log("Exercício 1 - checa triângulo:")
console.log(checaTriangulo(4 ,5 ,6))
console.log("Exercício 2 - cores favoritas:")
imprimeTresCoresFavoritas('rosa', 'lilás', 'verde')
console.log("Exercício 3 - checa ano bissexto:")
console.log(checaAnoBissexto(2022))
console.log("Exercício 4 - diferença entre dois números:")
console.log(comparaDoisNumeros(4, 9))
console.log("Exercício 5: - checa renovação do RG:")
console.log(checaRenovacaoRG(2022, 1995, 2018))
console.log("Exercício 6: - operações entre dois números:")
operacoesEntreDoisNumeros(4, 10)