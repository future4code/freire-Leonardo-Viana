## 1- 
a) Ele sempre se refencia a PRIMARY KEY de outra tabela

b) INSERT INTO Rating (id, comment, rate, movie_id)
VALUES (
"008",
"Ótimo",
8,
"008"
);

c) "Error Code: 1452.", mostrando que o id passado não existe na tabela de filmes

d) ALTER TABLE Filmes DROP COLUMN avaliacao;


## 2-
a) Associa o id de um ator com algum filme que ele teve participação

b) INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
"001",
"005"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
"002",
"002"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
"002",
"003"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
"003",
"002"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
"003",
"005"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES (
"004",
"001"
);

c) "Error Code: 1452.", mostrando que o id passado não existe na tabela de filmes/ator 

d) "Error Code: 1451.", mostrando que o id passado está associado a uma FOREIGN KEY.


## 3- 
a) O operador ON serve como um parametro para fazer a correspondência certa entre tabelas

b) SELECT m.nome as nome, m.id as movie_id, r.rate as rating FROM Filmes m
INNER JOIN Rating r ON m.id = r.movie_id;


## 4-
a) SELECT m.nome as nome, m.id as movie_id, r.rate as rating, r.comment as comment FROM Filmes m
LEFT JOIN Rating r ON m.id = r.movie_id;

b) SELECT m.movie_id as movie_is, f.nome as nome, m.actor_id as actor_is FROM MovieCast m 
LEFT JOIN Filmes f ON m.movie_id = f.id;

c) SELECT AVG(r.rate), f.nome FROM Rating r 
RIGHT JOIN Filmes f ON r.movie_id = f.id
GROUP BY (f.id); 


## 5-
a) Porque ele faz a integração com mais de uma tabela

b) SELECT f.id as movie_id, f.nome, a.id as actor_id, a.nome FROM Filmes f
LEFT JOIN MovieCast mc ON f.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

c) A sintaxe do código está errada, o certo seria "m.title".

d) SELECT f.id as movie_id, f.nome, r.rate as rate, a.id as actor_id, a.nome FROM Filmes f
LEFT JOIN MovieCast mc ON f.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id
LEFT JOIN Rating r ON f.id = r.movie_id;