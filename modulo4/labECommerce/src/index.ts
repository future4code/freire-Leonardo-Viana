import { AddressInfo } from "net";
import app from "./app";
import { addProduct } from "./endpoints/addProducts";
import { addUser } from "./endpoints/addUsers";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getProductById } from "./services/getProductById";
import axios from 'axios'
import { getPurchasesByUser } from "./endpoints/getPurchasesByUsers";
import { getAllUsers } from "./endpoints/getAllUsers";

app.post("/users", addUser)
app.post("/products", addProduct)
app.get("/products", getAllProducts)
app.get("/users/:user_id/purchases", getPurchasesByUser)
app.get("/users", getAllUsers)






const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});