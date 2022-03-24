const tarefas = ["Lavar a louça"]

const novaTarefa = process.argv[2]

tarefas.push(novaTarefa)

console.log("Tarefa adicionada com sucesso!")
console.log(tarefas)