import dotenv from "dotenv";
import express, { Express} from "express";
import {router} from './app/routes/router';
import cors from 'cors';
import path from 'path';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const corsOptions = {
    origin: 'http://localhost:3001', // Permite solicitudes solo desde este origen
    optionsSuccessStatus: 200 // Algunos navegadores más antiguos (IE11, varios SmartTVs) se bloquean con 204
  };

app.use(cors(corsOptions)); // Usa CORS con las opciones definidas
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, '../client/build')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use(router);

app.listen(port, () => console.log(`Server started on port ${port}`));