import express from 'express'
import cors from 'cors'
import { users, posts } from './data'


const app = express()
app.use(express.json())
app.use(cors())

//Endpoints
app.get("/", (req, res) => {          
    res.send("Hello from Express")
})
app.get("/users", (req, res)=>{
    res.status(200).send(users)
})
app.get("/posts", (req, res)=>{
    res.status(200).send(posts)
})
app.get("/posts/:userId", (req, res)=>{
    const postId = posts.filter((item)=>{
        return item.userId === Number(req.params.userId)
    })
    if (postId.length === 0){
        res.status(404).send("Id não encontrado")
    }else{
        res.status(200).send(postId)
    }
})
app.delete("/posts/:id", (req, res)=>{
    const postId = posts.filter((item)=>{
        return item.id !== Number(req.params.id)
    })
    if (postId.length === posts.length){
        res.status(404).send("Id não encontrado")
    }else{
        res.status(200).send("Post deletado")
    }
})
app.delete("/users/:id", (req, res)=>{
    const userId = users.filter((item)=>{
        return item.id !== Number(req.params.id)
    })
    if (userId.length === users.length){
        res.status(404).send("Id não encontrado")
    }else{
        res.status(200).send("Usuário deletado")
    }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});