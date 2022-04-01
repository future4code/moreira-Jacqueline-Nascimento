import express from 'express'
import cors from 'cors'
import { Account, accounts } from './data'
import { calculateAge , validateCPF } from './functions'

const app = express()
app.use(express.json())
app.use(cors())


//Cadastro do usuário
app.post('/users',(req, res)=>{
    let newError:number = 400
    try {
        if(!req.body.name || !req.body.cpf || !req.body.birthDate){
            newError = 401
            throw new Error("Alguns dos dados não foram recebidos")
        }
        if(typeof(req.body.name)!== 'string'){
            newError = 422
            throw new Error("O 'name' deve ser uma 'string'")
        }
        if(typeof(req.body.cpf)!== 'number'){
            newError = 422
            throw new Error("O 'cpf' deve ser um 'number'com 11 dígitos")
        }
        if(typeof(req.body.birthDate)!== 'string'){
            newError = 422
            throw new Error("A 'birthDate' deve ser uma 'string' no formato 'dd/mm/aaaa'")
        }
        const ageUser: number | string = calculateAge(req.body.birthDate)
        if (typeof(ageUser) === 'string'){
            newError = 422
            throw new Error(ageUser)
        }
        if (ageUser<18){
            newError = 401
            throw new Error("Idade do usuário menor do que 18 anos")
        }
        if (!validateCPF(req.body.cpf)){
            newError = 422
            throw new Error("CPF inválido")
        }
        const indexCPF = accounts.findIndex((item)=>{
            return item.CPF === req.body.cpf
        })
        if (indexCPF !== -1){
            newError = 406
            throw new Error("O usuário já possui conta")
        }
        const newAccount:Account = {
            name: req.body.name,
            CPF: req.body.cpf,
            birthDate: req.body.birthDate,
            balance: 0,
            statements: []
        }
        res.status(200).send([...accounts, newAccount])
        } catch (error: any) {
            res.status(newError).send(error.message)
        }
})
// Retorna todos os usuários
app.get("/users",(req, res)=>{
    res.status(200).send(accounts)
})
// Retorn saldo do usuário
app.get("/users/:cpf",(req, res)=>{
    let newError:number = 400
    try {
        const indexCPF = accounts.findIndex((item)=>{
            return item.CPF === Number(req.params.cpf)
        })
        if (indexCPF === -1){
            newError = 404
            throw new Error("Usuário não encontrado")
        }
        const user = accounts[indexCPF]
        res.status(200).send(`O seu saldo é R$${user.balance.toFixed(2)}`)
    }   catch (error: any) {
        res.status(newError).send(error.message)
    }
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});