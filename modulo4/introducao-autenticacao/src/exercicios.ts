// 1
// a) Concordo, pois que a chance de repetição (ou colisão) de algum UUID é muito pequena.

// b) 
import { GenerateId } from "./services/GenerateId";
GenerateId()

// 2
// a) O código estabelece uma conexão com o banco de dados e declara uma função para adicionar usuário.

// b) 
// CREATE TABLE User (
//     id VARCHAR(255) PRIMARY KEY,
// email VARCHAR(255) UNIQUE NOT NULL,
// password VARCHAR(255) NOT NULL
// );


// 3
// a) Para garantir que a key passada seja string,

// b) 
// type AuthenticationData = {
//     id: string;
//   }