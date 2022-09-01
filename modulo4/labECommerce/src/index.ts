import { AddressInfo } from "net";
import app from "./app";
import { addProduct } from "./endpoints/addProducts";
import { addUser } from "./endpoints/addUsers";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getProductById } from "./services/getProductById";
import axios from 'axios'

app.post("/users", addUser)
app.post("/products", addProduct)
app.get("/products", getAllProducts)



console.log(getProductById("1662041684323", 3))


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});