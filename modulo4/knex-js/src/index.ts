import { AddressInfo } from "net";
import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import knex from "knex";
import dotenv from "dotenv";

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

const app: Express = express();

app.use(express.json());
app.use(cors());


// Funções
const getActorById = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `)
  
      return result[0][0]
}
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result[0][0]
}
const countActors = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
    `);
    const count = result[0][0].count;
    return count;
  };

getActorById("Tony Ramos")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
});

getActorByName("Tony Ramos")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
});

countActors("female")
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
});
const updateActor = async (id: string, salary: number): Promise<any> => {
    await connection("Actor")
      .update({
        salary: salary,
      })
      .where("id", id);
};
const deleteActor = async (id: string): Promise<void> => {
    await connection("Actor")
      .delete()
      .where("id", id);
};
const avgSalary = async (gender: string): Promise<any> => {
    const result = await connection("Actor")
      .avg("salary as average")
      .where({ gender });
  
    return result[0].average;
};

//Endpoints
app.get("/actor/:id", async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const actor = await getActorById(id);
  
      res.status(200).send(actor)
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
});

app.get("/actor", async (req: Request, res: Response) => {
    try {
      const count = await countActors(req.query.gender as string);
      res.status(200).send({
        quantity: count,
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
});

app.put("/actor", async (req: Request, res: Response) => {
    try {
      await updateActor(req.body.id, req.body.salary);
      res.status(200).send({
        message: "Success",
      });
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
});

app.delete("/actor/:id", async (req: Request, res: Response) => {
    try {
      await deleteActor(req.params.id);
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
      });
    }
});

//Chamada do servidor

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});