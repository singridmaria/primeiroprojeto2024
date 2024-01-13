import express from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())//Configurar para receber dados do tipo JSON
app.use(cors())//Middleware para controlar requisições --> Intermediador

app.get('/', (request, response) => {
    return response.json('Resposta do servidor')
})

app.listen(4000,() => {
    console.log('Servidor está funcionando')
})