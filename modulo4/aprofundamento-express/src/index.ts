import express from 'express'
import cors from 'cors'
import { Afazer, afazeres } from './data'



const app = express()
app.use(express.json())
app.use(cors())


//Endpoint Ping-pong
app.get('/ping', (req, res) => {
    res.status(200).send('Pong! 🏓')
})
//Endpoint Afazeres
app.get('/afazeres',(req, res)=>{
    let afazeresFiltrado
    if (req.query.status === 'concluido' ){
        afazeresFiltrado = afazeres.filter((item)=>{
            return item.completed
        })
        res.status(200).send(afazeresFiltrado)
    } else if(req.query.status === 'andamento'){
        afazeresFiltrado = afazeres.filter((item)=>{
            return !item.completed
        })
        res.status(200).send(afazeresFiltrado)
    } else {
        res.status(404).send('Especifique status do afazer em: "concluido" ou "andamento"')
    }
})
// Endpoint Adicionar Afazer
app.post("/afazeres", (req, res)=>{
    const userId = Number(req.headers.authorization)
    const afazerId = afazeres.length + 1
    const novoAfazer:Afazer = {
        userId: userId,
        id: afazerId,
        title: req.body.title,
        completed: req.body.completed
    }
    if (Number(req.headers.authorization) && req.body.title && req.body.completed){
        res.status(200).send([...afazeres, novoAfazer])
    }else{
        res.status(400).send("Verifique dados do header e body")
    }
})
//Endpoint Muda Status do Afazer
app.put("/afazeres/:id/status", (req, res)=>{
    const afazerId = Number(req.params.id)
    const listaAtualizada = afazeres.map((item)=>{
        if (afazerId===item.id){
            return {...item, completed:!item.completed}
        }else{
            return item
        }
    })
    const index = afazeres.findIndex((item)=>{
        return item.id === afazerId
    })
    if (Number(req.params.id)&& index!==-1){
        res.status(200).send(listaAtualizada)
    }else{
        res.status(400).send("Id não encontrado")
    }
})
// Deleta Afazer por Id
app.delete("/afazeres/:id", (req, res)=>{
    const afazerId = Number(req.params.id)
    const listaAtualizada = afazeres.filter((item)=>{
        return afazerId!==item.id
    })
    if (Number(req.params.id) && listaAtualizada.length!==afazeres.length){
        res.status(200).send(listaAtualizada)
    }else{
        res.status(400).send("Id não encontrado")
    }
})
//Endpoint Afazeres de um usuário
app.get('/afazeres/:userId',(req, res)=>{
    let afazeresFiltrado = afazeres.filter((item)=>{
        return item.userId === Number(req.params.userId)
    })
    const index = afazeres.findIndex((item)=>{
        return item.userId === Number(req.params.userId)
    })
    if (Number(req.params.userId) && index!==-1){
        res.status(200).send(afazeresFiltrado)
    } else {
        res.status(404).send('Usuário não encontrado')
    }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
   })