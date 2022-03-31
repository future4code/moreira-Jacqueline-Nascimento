type Usuario = {
    name: string,
    email: string,
    role: "user" | "admin"
}

function emailsAdmin (lista: Usuario[]):string[] {
    const listaFiltrada = lista.filter((item)=>{return item.role === "admin"})
    const listaDeEmails = listaFiltrada.map((item)=>{return item.email})
    return listaDeEmails
}
const arrayUsuarios: Usuario[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 
console.log(emailsAdmin(arrayUsuarios))