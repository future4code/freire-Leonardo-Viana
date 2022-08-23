## Exercício 1
a) ALTER TABLE Actor DROP COLUMN salary;
Vai excluir a coluna salary

b) ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
Vai trocar a propriedade gender por sex, sendo possível colocar até 6 caracteres

c) ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
Vai alterar o tipo do gender para VARCHAR(255)

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


## Exercício 2
a) UPDATE Actor 
SET nome = "Moacyr Franco",
birth_date = "2000-10-10"
WHERE id = "003";

b) UPDATE Actor 
SET nome = "JULIANA PAES"
WHERE nome = "Juliana Paes";

UPDATE Actor 
SET nome = "Juliana Paes"
WHERE nome = "JULIANA PAES";

c) UPDATE Actor 
SET nome = "Moacyr Franco",
birth_date = "2000-10-10",
salary = 10000,
gender = "male"
WHERE id = "005";

d) Não retorna nenhum erro pelo fato de não interferir em nehuma linha existente


## Exercício 3 
a) DELETE FROM Actor WHERE nome = "Fernanda Montenegro";

b) DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;


## Exercício 4
a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "female";

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;


## Exercício 5
a) Mostra a quantidade de atores em relação a cada gênero

b) SELECT id, nome FROM Actor ORDER BY name DESC;

c) SELECT * FROM Actor ORDER BY salary;

d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;


## Exercício 6
a) ALTER TABLE Movie ADD playing_limit_date DATE;

b) ALTER TABLE Movie CHANGE avaliacao avaliacao FLOAT;

c) UPDATE Movie 
SET playing_limit_date = "2022-08-10"
WHERE id = "001";

UPDATE Movie 
SET playing_limit_date = "2022-12-10"
WHERE id = "002";

d) Não retorna nehum erro pois a linha atualizada nao existe mais, logo não é afetada


