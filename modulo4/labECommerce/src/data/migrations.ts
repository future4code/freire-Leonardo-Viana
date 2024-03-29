import { connection } from "./connection"
const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection.raw(`
      CREATE TABLE IF NOT EXISTS labecommerce_users (
         user_id VARCHAR(255) PRIMARY KEY,
         name VARCHAR(255) NOT NULL,
         email VARCHAR(255) NOT NULL,
         password VARCHAR(255) NOT NULL,         
      );
   `)
    .then(() => { console.log("Tabela criada") })
    .catch(printError)

const createTablesProducts = () => connection.raw(`
   CREATE TABLE IF NOT EXISTS labecommerce_products (
      product_id VARCHAR(255) PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      price INT NOT NULL,
      image_url VARCHAR(255) NOT NULL        
   );
`)
    .then(() => { console.log("Tabela criada") })
    .catch(printError)

    const createTablesPurchases = () => connection.raw(`
    CREATE TABLE IF NOT EXISTS labecommerce_purchases (
       id VARCHAR(255) PRIMARY KEY,
       user_id VARCHAR(255),
       FOREIGN KEY (user_id) REFERENCES labecommerce_users(user_id),       
       product_id VARCHAR(255),
       FOREIGN KEY (product_id) REFERENCES labecommerce_products(product_id),       
       quantity INT NOT NULL,
       total_price INT NOT NULL            
    );
 `)
     .then(() => { console.log("Tabela criada") })
     .catch(printError)    

const closeConnection = () => { connection.destroy() }

createTablesPurchases()
    .then(() => console.log("Banco pronto!"))
    .finally(closeConnection)