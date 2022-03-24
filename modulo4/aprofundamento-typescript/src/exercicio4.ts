type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

/* 
b) Para transpilar usa o comando 'tsc exercicio4.ts' no terminal
Se a pasta estiver em alguma pasta diferente, usa o caminho até o arquivo: 'tsc src/exercicio4.ts'


c) Para transpilar vários arquivos podemos escrever o nome do todos eles após o comando tsc,
ou somente usar o comando tsc que ele irá transpilar todos os arquivos do tipo ts
*/