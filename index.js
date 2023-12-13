import express from "express";
import { monsters } from "./monster.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

app.get('/monsters', (req, res) => {
    res.json(monsters);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});