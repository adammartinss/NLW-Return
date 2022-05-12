require('dotenv').config();

import express from 'express';
import cors from 'cors'
import { routes } from './routes';


const app = express();

app.use(cors(
    //{origin: 'endereço do front-end}
))
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('HTTP server running!');
});
