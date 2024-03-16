import express from 'express'
import { connection } from './src/mysql-connect.js'


const app = express()
const routes = express.Router();

app.use(express.json())//Configurar para receber dados do tipo JSON
app.use(routes)//Middleware para controlar requisições --> Intermediador

routes.get('/', async (request, response)  => {
    const [rows] = await connection.query("show tables");
    
    return response.status(200).json(rows);
    
});

app.listen(4000,() => {
    console.log('Servidor está funcionando')
})