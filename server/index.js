import express from "express";
import cors from 'cors'
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import Routes from "./routes/routes.js";

const app = express()

app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes)

Connection();

const port = 9898 || process.env.PORT;
app.listen(port, () => console.log(`Server runnning on port ${port}!`))