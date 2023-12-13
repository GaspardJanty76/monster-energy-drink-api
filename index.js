import express from "express";
import { monsters } from "./monster.js";
import dotenv from "dotenv";
import cors from "cors";


dotenv.config();


const app = express();
const port = process.env.PORT;

app.use(cors());


app.get('/monsters/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const monster = monsters.find(monster => monster.id === id);

    res.json(monster)
})
 
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}) 