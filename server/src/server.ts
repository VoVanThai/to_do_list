
import cors from 'cors';
import express, { Request, Response } from "express"
import taskRouter from "./router/todo.router";
import bodyParser from "body-parser";
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/api", taskRouter)

app.get('/', (req: Request, res: Response) => {
    res.json("Hello")
})

app.get('/test', (req: Request, res: Response) => {
    res.json({ message: "From server" })
})

app.listen(4000, () => {
    console.log("run on port 4000")
})