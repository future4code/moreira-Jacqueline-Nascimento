### Exercício 1

a) A query apaga a coluna 'salary' da tabela 'Actor'
b) A query renomeia a coluna 'gender' da tabela 'Actor' para 'sex' e passa a aceitar variáveis do tipo VARCHAR(6)
c) A query muda a coluna 'gender' da tabela 'Actor' para aceitar veriáveis do tipo VARCHAR(255) 
d) Query:
```sql
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2
a)
```sql
UPDATE Actor
SET name = "Vera Fischer", birth_date = "1951-11-27"
WHERE id = "003";
```
b)
```sql
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
```
c)
```sql
UPDATE Actor
SET 
name = "Bruno Gagliasso",
birth_date = "1982-04-13",
salary = 300000,
gender = "male"
WHERE id = "005";
```
d) Saída: 15:06:54	UPDATE Actor SET name = "Vera Fischer", birth_date = "1951-11-27" WHERE id = "103"	0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0	0.172 sec
Significa que nenhuma linha foi alterada, pois não existe ninguém com esse id

### Exercício 3
a)
```sql
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```
b)
```sql
DELETE FROM Actor
WHERE gender = "male" AND salary > 1000000;
```

### Exercício 4
a)
```sql
SELECT MAX(salary) FROM Actor;
```
b)
```sql
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```
c)
```sql
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```
d)
```sql
SELECT SUM(salary) FROM Actor;
```

### Exercício 5
a) A query agrupou os atores por gênero, mostrando a quantidade de pessoas do gênero 'male' e 'female' separadamente.
b)
```sql
SELECT id, name
FROM Actor
ORDER BY name DESC;
```
c)
```sql
SELECT *
FROM Actor
ORDER BY salary;
```
d)
```sql
SELECT *
FROM Actor
ORDER BY salary DESC LIMIT 3;
```
e)
```sql
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

### Exercício 6
a)
```sql
ALTER TABLE Movie ADD playing_limit_date DATE;
```
b)
```sql
ALTER TABLE Movie CHANGE rating rating FLOAT;
```
c)
```sql
UPDATE Movie
SET playing_limit_date = '2022-05-10'
WHERE id = "001";
UPDATE Movie
SET playing_limit_date = '2021-04-25'
WHERE id = "002";
```
d) Depois que o filme é deletado, não é possível mais alterações com aquele id, ele retorna uma mensagem de que 0 alterações foram feitas.
```sql
DELETE FROM Movie WHERE id = "002";
```