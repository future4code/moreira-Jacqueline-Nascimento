import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { createUser, getUserById } from "./data/data";

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

export const app: Express = express();
app.use(express.json());
app.use(cors());

// Endpoint Criar Usuário
app.post("/user", async (req: Request, res: Response) => {
    const id = Math.random().toString(36).substr(2, 9)
    let newError:number = 400
    try {
        if(!req.body.name || !req.body.email || !req.body.nickname){
            newError = 401
            throw new Error("Alguns dos dados não foram recebidos")
        }
        if(typeof(req.body.name)!== 'string' || typeof(req.body.email)!== 'string' || typeof(req.body.nickname)!== 'string'){
            newError = 422
            throw new Error("Todos os dados devem ser do tipo 'string'")
        }
        await createUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email
        );  
        res.status(200).send(`O usuário ${req.body.nickname} foi criado`);
    } catch (err: any) {
        res.status(400).send({message: err.message});
    }
});
// Endpoint Pegar Usuário por id
app.get("/user/:id", async (req: Request, res: Response) => {
    let newError:number = 400
    try {
        const id = req.params.id;
        const user = await getUserById(id);
        if(!user){
            newError = 404
            throw new Error("Usuário não encontrado")
        }
        res.status(200).send(user)
      } catch (err: any) {
        res.status(newError).send({
          message: err.message,
        });
      }
})






const server: any = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});