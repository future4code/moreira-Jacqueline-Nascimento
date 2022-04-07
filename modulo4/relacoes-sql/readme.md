### Exercício 1

a) Chave estrangeira é uma chave que faz referência a algo presente em outra tabela.
b) Querys:
```sql
CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"001",
    "Melhor filme de comédia!",
    10,
		"004"
);
select * from Movie;
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"002",
    "Bom Filme!",
    7,
		"003"
);
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"003",
    "Muito bom!",
    8,
		"001"
);
```
c) Tentativa de Query:
```sql
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
		"004",
    "Muito bom!",
    7,
		"002"
);
```
Essa query dá um erro de falha na Chave Estrangeira, pois não existe um filme na tabela Movie com este id.
d) Query:
```sql
ALTER TABLE Movie DROP COLUMN rating;
```
e) Não é possível apagar linhas de tabelas que estão relacionadas a outras tabelas.

### Exercício 2

a) A tabela MovieCast é uma tabela com apenas dois parâmetros, ambos chaves estrangeiras que se relacionam com as tabelas Actor e Movie.
b) Querys:
```sql
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("001","001");
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("001","002");
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("003","003");
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("003","004");
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("004","005");
INSERT INTO MovieCast(movie_id, actor_id)
VALUES("004","006");
```
c) Aparece um erro de falha na Chave Estrangeira, pois não existe um filme na tabela Movie com este id, o mesmo acontece caso não exista um ator da tabela Actor com o id passado.
d) Não é possível apagar linhas de tabelas que estão relacionadas a outras tabelas.

### Exercício 3
a) O operador ON tem função similar ao operador WHERE, ele traz uma condição.
b) Query:
```sql
SELECT m.name as movie_name, m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```

### Exercício 4
a)
```sql
SELECT m.id as movie_id, m.name, r.rate as rating, r.comment as rating_comment
FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id;
```
b)
```sql
SELECT m.id as movie_id, m.name, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;
```
c)
```sql
SELECT AVG(r.rate), m.id, m.name FROM Movie m
LEFT JOIN Rating r ON m.id = r.movie_id
GROUP BY (m.id);
```