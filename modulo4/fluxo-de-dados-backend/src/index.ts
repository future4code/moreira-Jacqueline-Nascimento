import express from 'express'
import cors from 'cors'
import { Produto, produtos } from './data'

const app = express()
app.use(express.json())
app.use(cors())

//Endpoints
//Endpoint de teste
app.get('/test', (req, res)=>{
    res.status(200).send("A API está funcionando corretamente!")
})
//Endpoint Add Produto
app.post('/produtos', (req, res)=>{
    const id = Math.random().toString(36).substr(2, 9)
    let newError:number = 400
    try {
        if(req.body.price<=0){
            newError = 422
            throw new Error("Preço menor ou igual a zero")
        }
        if(!req.body.name || !req.body.price){
            newError = 401
            throw new Error("Alguns dos dados não foram recebidos")
        }
        if(typeof(req.body.name)!== 'string'){
            newError = 422
            throw new Error("O 'name' não é uma 'string'")
        }
        if(typeof(req.body.price)!== 'number'){
            newError = 422
            throw new Error("O 'price' não é um 'number'")
        }
        const name: string = req.body.name
        const price: number = req.body.price
        const novoProduto:Produto = {
            id: id,
            name: name,
            price: price
        }
        res.status(200).send([...produtos, novoProduto])
        } catch (error: any) {
            res.status(newError).send(error.message)
        }
})
// Endpoint retorna produtos
app.get('/produtos', (req, res)=>{
    res.status(200).send(produtos)
})
//Endpoint altera preço
app.put('/produtos/:id', (req, res)=>{
    const id = req.params.id
    const index:number = produtos.findIndex((item)=>{
        return item.id === id
    })
    let newError:number = 400
    try {
        if(index === -1){
            newError = 404
            throw new Error("Produto não encontrado. Verifique id!")
        }
        if(req.body.price<=0){
            newError = 422
            throw new Error("Preço menor ou igual a zero")
        }
        if(!req.body.price){
            newError = 401
            throw new Error("Preço não recebido")
        }
        if(typeof(req.body.price)!== 'number'){
            newError = 422
            throw new Error("O 'price' não é um 'number'")
        }
        const price: number = req.body.price
        const novaLista: Produto[] = produtos.map((item)=>{
            if (item.id === id){
                return {...item, price:price}
            }else{
                return item
            }
        })
        res.status(200).send(novaLista)
        } catch (error: any) {
            res.status(newError).send(error.message)
        }
})
//Endpoint deleta produto
app.delete('/produtos/:id', (req, res)=>{
    const id = req.params.id
    const index:number = produtos.findIndex((item)=>{
        return item.id === id
    })
    let newError:number = 400
    try {
        if(index === -1){
            newError = 404
            throw new Error("Produto não encontrado. Verifique id!")
        }
        const novaLista: Produto[] = produtos.filter((item)=>{
            return item.id !== id
        })
        res.status(200).send(novaLista)
        } catch (error: any) {
            res.status(newError).send(error.message)
        }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});