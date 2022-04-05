import express from 'express'
import cors from 'cors'
import { User, users, UserType } from './data'

const app = express()
app.use(express.json())
app.use(cors())

//Respostar teóricas
/*
Exercício 1:
a) O método GET
b) GET '/users'

Exercício 2:
a) Passei como path params para cair em uma requisição diferente do exercício 1
b) Criando um ENUM

Exercício 3:
a) Costuma ser utilizado query

Exercício 4:
a) Não mudou nada
b) Normalmente o post que é utilizado para novos parâmetros e o put é utilizado para alterar parâmetros já existentes
*/

//Endpoints
//Endpoint retorna usuarios pelo nome
app.get('/users', (req, res)=>{
    const nomeUser = req.query.nome
    let newError:number = 400
    let userByName: User | User[] | undefined = users.find((item)=>{
        return item.name === nomeUser
    })
    try {
        if(!req.query.nome){
            userByName = users
        }
        if(!userByName){
            newError = 404
            throw new Error("Usuário não encontrado.")
        }
        res.status(200).send(userByName)
        } catch (error: any) {
            res.status(newError).send(error.message)
        }
})
// Endpoint retorna usuarios
app.get('/users', (req, res)=>{
    res.status(200).send(users)
})
//Endpoint retorna usuarios pelo tipo
app.get('/users/:tipo', (req, res)=>{
    const typeUser = req.params.tipo
    let newError:number = 400
    try {
        if(typeUser.toLocaleUpperCase() !== UserType.ADMIN && typeUser.toLocaleUpperCase() !== UserType.NORMAL){
            newError = 404
            throw new Error("Tipo não encontrado. Especifique tipo 'ADMIN' ou 'NORMAL'")
        }
        const novaLista: User[] = users.filter((item)=>{
            return item.type === typeUser.toLocaleUpperCase()
        })
        res.status(200).send(novaLista)
        } catch (error: any) {
            res.status(newError).send(error.message)
        }
})

//Endpoint add usuario
app.put('/users', (req, res)=>{
    const id = users.length + 1
    let newError:number = 400
    try {
        if(!req.body.name || !req.body.email || !req.body.type || !req.body.age){
            newError = 401
            throw new Error("Alguns dos dados não foram recebidos")
        }
        if(typeof(req.body.name)!== 'string'){
            newError = 422
            throw new Error("O 'name' não é uma 'string'")
        }
        if(typeof(req.body.email)!== 'string'){
            newError = 422
            throw new Error("O 'email' não é uma 'string'")
        }
        if(typeof(req.body.type)!== 'string'){
            newError = 422
            throw new Error("O 'type' não é uma 'string'")
        }
        if(typeof(req.body.age)!== 'number'){
            newError = 422
            throw new Error("A 'age' não é um 'number'")
        }
        if(req.body.type !== UserType.ADMIN && req.body.type !== UserType.NORMAL){
            newError = 404
            throw new Error("Type não encontrado. Especifique type 'ADMIN' ou 'NORMAL'")
        }
        const name: string = req.body.name
        const email: string = req.body.email
        const age: number = req.body.age
        const tipo: UserType = req.body.type
        const newUser:User = {
            id: id,
            name: name,
            email: email,
            type: tipo,
            age: age
        }
        res.status(200).send([...users, newUser])
        } catch (error: any) {
            res.status(newError).send(error.message)
        }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});