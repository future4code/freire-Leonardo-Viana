## Exercício 1
a) Varchar - limite de caracteres 
   Date - tipo de data

b) SHOW DATABASES - retorna as databases presentes
   SHOW TABLES - retorna as tabelas presentes em uma database

c) DESCRIBE - retorna a descrição de como a tabela foi declarada


## Exercício 2
a) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200,
  "1963-08-23", 
  "female"
);

b) Não foi possível por conta do id ser declarado como PRIMARY KEY

c) Não é possível porque não passou todos os parâmetros no INSERT INTO

d) Não preencheu o parâmetro name que foi declarado como NOT NULL

e) 


## Exercício 3 
a) SELECT * FROM Actor WHERE gender = "female";

b) SELECT salary FROM Actor WHERE name = "Tony Ramos";

c) 

d) SELECT id, name, salary FROM Actor WHERE salary <= 500000;

e) Deu errado pela forma escrita do parâmetro "name" estar errada


## Exercício 4 
a) Selecione toda a tabela Actor onde apreça apenas atores com iniciais A ou J, e que tenham salário acxima de 300 mil

b) SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

c) SELECT * FROM Actor
WHERE name LIKE "%G%"  OR name LIKE "%g%";

d) SELECT * FROM Actor 
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%G%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;


## Exercício 5
a) CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sinopse TEXT,
    data_lancamento DATE NOT NULL,
    avaliacao INT  
)

b) INSERT INTO Filmes (id,nome,sinopse,data_lancamento,avaliacao)
VALUES(
"001",
"Se eu fosse voce",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2017-11-02",
"8"
);

c) INSERT INTO Filmes (id,nome,sinopse,data_lancamento,avaliacao)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
"10"
);

d) INSERT INTO Filmes (id,nome,sinopse,data_lancamento,avaliacao)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017-11-02",
"8"
);

e) INSERT INTO Filmes (id,nome,sinopse,data_lancamento,avaliacao)
VALUES(
"004",
"Deus é Brasileiro",
"Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
"2003-01-31",
"9"
);


## Exercício 6
a) SELECT id, nome, avaliacao FROM Filmes WHERE id = "002";

b) SELECT * FROM Filmes WHERE nome = "Deus é Brasileiro";

c) SELECT id, nome, sinopse FROM Filmes WHERE avaliacao >= 7;


## Exercício 7 
a) SELECT * FROM Filmes WHERE nome LIKE "%vida%";

b) SELECT * FROM Filmes WHERE nome LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%";

c) SELECT * FROM Filmes WHERE data_lancamento < "2022-08-22";

D) SELECT * FROM Filmes WHERE data_lancamento < "2022-08-22" AND (nome LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%") AND avaliacao > 7





