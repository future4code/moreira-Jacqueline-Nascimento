### Exercício 1

a) O raw devolve exatamente o que o banco MySQL devolveu, ou seja, uma tabela, e o que importa para gente é a primeira linha dessa tabela.
b)
```ts
const getActorByName = async (name: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result[0][0]
}
```
c)
```ts
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
  const count = result[0][0].count;
  return count;
};
```

### Exercício 2
a)
```ts
const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
};
```
b)
```ts
const deleteActor = async (id: string): Promise<void> => {
  await connection("Actor")
    .delete()
    .where("id", id);
}; 
```
c)
```ts
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where({ gender });

  return result[0].average;
};
```

### Exercício 3
a)
```ts
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
```
b)
```ts
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
```

### Exercício 4
a)
```ts
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
```
b)
```ts
app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    await deleteActor(req.params.id);
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});
```