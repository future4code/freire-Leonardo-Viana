import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";




const app = express();
app.use(express.json());
app.use(cors());

app.post("/user", async (req, res) => {
    try {
        await connection("Users")
            .insert({
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email
            })

        res.status(200).send("Usuário cadastrado com sucesso!")

    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }

})


app.get("/user/:id", async (req, res) => {
    try {
        const result = await connection("Users")
            .select('id', 'nickname')
            .where({ id: req.params.id })

        if (result.length > 0) {
            res.status(200).send(result)
        } else res.status(404).send("Id de usuário não encontrada")

    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})


app.put("/user/edit/:id", async (req, res) => {
    try {
        if (req.body.name == undefined || req.body.nickname == undefined) {
            throw new Error("Preencha todos os campos de mudança do usuário")
        }
        await connection("Users")
            .update({
                name: req.body.name,
                nickname: req.body.nickname
            })
            .where({ id: req.params.id })

        res.status(200).send("Alterado com sucesso")
    } catch (error: any) {
        switch (error.message) {
            case "Preencha todos os campos de mudança do usuário":
                res.status(404).send(error.message)
                break

            default:
                res.status(500).send(error.sqlMessage || error.message)
        }

    }
})


app.post("/task", async (req, res) => {
    try {
        await connection ("Tasks")
        .insert({
            title: req.body.title,
            description: req.body.description,
            limitDate: `${req.body.limitDate.split("/")[2]}-${req.body.limitDate.split("/")[1]}-${req.body.limitDate.split("/")[0]}`,
            creatorUserId: req.body.creatorUserId
        })

        res.status(200).send("Tarefa cadastrado com sucesso!")
        
    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)        
    }
})


app.get("/task/:id", async (req,res) => {
    try {
        const id: any = req.params.id
        const getTaskById = async (id: number) : Promise<any> => {
            const result = await connection.raw(`
            SELECT t.id, t.title, t.description, t.limitDate, t.status, t.creatorUserId, u.nickname FROM Tasks t JOIN Users u ON u.id = t.creatorUserId WHERE t.id = ${id};
            `)
            return result[0][0]
             
        }
        
        res.status(200).send( await getTaskById(id) )
         
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)           
    }

})


app.get("/users/all", async (req,res) => {
    try {
        const all = await connection ("Users")
        .select('id', 'nickname')

        if(all.length>0) {
            res.status(200).send(all)
        } else {
            res.status(404).send("Nenhum usuário encontrado")
        }        
        
    } catch (error:any) {
        res.status(500).send(error.sqlMessage || error.message)        
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});