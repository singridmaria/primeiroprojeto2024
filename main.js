import express from 'express'

import cors from 'cors'
import sequelize from './src/database/sequelize.js'


const app = express()
const routes = express.Router();

app.use(express.json())//Configurar para receber dados do tipo JSON
app.use(routes)//Middleware para controlar requisições --> Intermediador

app.get('/', async (request, response)  => {
    const data = connection.execute('select * from user')
    response.json('App is up')
    
    return response.status(200).json(rows);
    
});

app.post('programming-languages',async(request, response) => {
    const data = request.body
    const query = await connection.execute('',[])

    return response.json()
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)

})