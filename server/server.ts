import dotenv from "dotenv";
import express, { Express} from "express";
import {router} from './app/routes/router';

dotenv.config({
});

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.listen(port, () => console.log(`Server started on port ${port}`));