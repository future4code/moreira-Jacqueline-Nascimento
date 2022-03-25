type Clientes = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}

function clientesNegativados (lista: Clientes[]):Clientes[] {
    const clientesDebitados = lista.map((item)=>{
        const saldoAtualizado: number = item.debitos.reduce((total, num)=>{
            return total - num
        }, item.saldoTotal)
        const clienteAtualizado: Clientes = {
            cliente: item.cliente,
            saldoTotal: saldoAtualizado,
            debitos: []
        }
        return clienteAtualizado
    })

    return clientesDebitados.filter((item)=>{
        return item.saldoTotal<0
    })
}

const listaDeClientes: Clientes[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

console.table(clientesNegativados(listaDeClientes))