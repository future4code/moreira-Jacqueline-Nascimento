### Exercício 1
a) Comandos da query:
* VARCHAR(n) significa que pode receber uma string de até n caracteres.
* DATE representa uma data.
* NOT NULL significa que aquela variável não pode ser nula
* PRIMARY KEY é a chave primária da tabela
b) SHOW DATABASES mostra todas as bases de dados no meu servidor e SHOW TABLES mostra as tabelas da minha base de dados.
c) DESCRIBE Actor mostra quais são os campos existentes na tabela, o tipe de cada campo, se é possível ser nulo, quem é a chave primária e o valor default de cada campo.

### Exercício 2
a) A query é:
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);
```
b) Erro dado:
Error Code:1062. Duplicate entry '002' for key 'PRIMARY'. Isso acontece porque não é permitido que dois elementos tenham a mesma chave primária, a chave primária deve ser única para cada elemento.
c) Aconteceu erro da contagem de colunas não bateu com o correto, isso acontece porque se passou mais valores do que foi anunciado. A query correta é:
 ```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
```
d) Neste ocorreu um erro porque não foi passado a campo de name, e ele estava definido como NOT NULL, então obrigatoriamente deve ser passado.
```sql
INSERT INTO Actor (id, salary, birth_date, gender, name)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male",
  "Tarcisio Meira"
);
```
e)O erro foi no formato incorreto da data que deve ser passado entre aspas:
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);
```
f)
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Camila Queiroz",
  1200000,
  "1993-06-27", 
  "female"
);
```
```sql
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "007", 
  "Caio Castro",
  170000,
  "1989-01-22", 
  "male"
);
```

### Exercício 3
a) Query:
```sql
SELECT * from Actor WHERE gender = "female";
```
b) Query:
```sql
SELECT salary from Actor WHERE name = "Tony Ramos";
```
c) Query:
```sql
SELECT * from Actor WHERE gender = "invalid";
```
* Não retornou nada, pois não existe nenhum ator com gênero 'invalid'
d) Query:
```sql
SELECT id, name, salary from Actor WHERE salary <= 500000;
```
e) A query gerou um erro porque o nome correto da coluna é 'name' e não 'nome'. O correto seria:
```sql
SELECT id, name from Actor WHERE id = "002";
```

### Exercício 4
a) A query chama os atores que ganham mais que 300000 e que tenham seu nome iniciado com a letra A ou J, representado por A% ou J%, que siginifica que pode vim qualquer coisa depois do A ou do J. Caso fosse nomes que terminasse com A, por exemplo, deveria escrever %A.
b) Query:
```sql
SELECT * from Actor WHERE name NOT LIKE "A%" AND salary > 350000;
```
c) Query:
```sql
SELECT * from Actor WHERE name LIKE "%g%" OR name LIKE "%G%";
```
d) Query:
```sql
SELECT * FROM Actor WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") AND salary BETWEEN 350000 AND 900000;
```
### Exercício 5
a) Query:
```sql
CREATE TABLE Filme (
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR (255) NOT NULL UNIQUE,
    sinopse TEXT NOT NULL,
    lancamento DATE NOT NULL,
    avaliacao INT NOT NULL);
```
b) Query:
```sql
INSERT INTO Filme
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);
```
c) Query:
```sql
INSERT INTO Filme
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);
```
d) Query:
```sql
INSERT INTO Filme
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);
```
e) Query:
```sql
INSERT INTO Filme
VALUES(
  "004", 
  "Minha mãe é uma peça",
  "Dona Hermínia é uma mulher de meia idade, divorciada do marido, que a trocou por uma mais jovem. Hiperativa, ela não largo o pé de seus filhos Marcelina e Juliano, que estão bem grandinhos.",
  "2013-06-21", 
  10
);
```

### Exercício 6
a) Query:
```sql
SELECT id, nome, avaliacao from Filme WHERE id = "004";
```
b) Query:
```sql
SELECT * from Filme WHERE nome = "Doce de mãe";
```
c) Query:
```sql
SELECT id, nome, sinopse from Filme WHERE avaliacao >= 7;
```

### Exercício 7
a) Query:
```sql
SELECT * from Filme WHERE nome LIKE "%vida%";
```
b) Query:
```sql
SELECT * from Filme WHERE nome LIKE "%mãe%" OR sinopse LIKE "%mãe%";
```
c) Query:
```sql
SELECT * from Filme WHERE lancamento < CURDATE();
```
d) Query:
```sql
SELECT * from Filme WHERE (nome LIKE "%mãe%" OR sinopse LIKE "%mãe%") AND
lancamento < CURDATE() AND avaliacao >= 7;
```