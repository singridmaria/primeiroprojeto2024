import express from 'express';
import { connection } from './src/mysql-connect.js';
import cors from 'cors';
import morgan from 'morgan';

const port = 8085
const app = express()
const routes = express.Router();

app.use(express.json())//Configurar para receber dados do tipo JSON
app.use(cors());
app.use(morgan("dev"));
app.use(routes)//Middleware para controlar requisições --> Intermediador

// app.get('/', async /*<- Função */(request, response) => {
// const data = connection.execute('select * from user')
// return response.status(200).json(rows);
// });

routes.post('\programming-languages', async (request, response) => {
    try {
        const data = request.body

        const [result] = await connection.execute("INSERT INTO `programming-languages` (`language`,`percentage`) VALUES (?,?)",
            [data.lang, data.percentage]
        );

        return response.status(200).json(`Dados criados com sucesso: ${result}`);
    } catch (error) {
        return response.status(500).json(error);
    }
});

routes.listen(3000, () => console.log("Server is up"));