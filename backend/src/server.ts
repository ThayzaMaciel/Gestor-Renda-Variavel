import express from "express";
import dotenv from "dotenv"

dotenv.config();

const server = express();

server.use(express.json());

const PORT = process.env.PORT || 3000;

server.get("/", (req, res) => {
    res.send("Servidor funcionando!")
});

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});