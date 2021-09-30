const cors = require('cors')
const { request, response } = require('express');
const express = require('express');
const app = express();
const axios = require('axios') // 2 Axios é muito parecido com o fetch

app.use(cors()) 
/*O CORS é uma especificação do W3C e faz uso de headers do HTTP
 para informar aos navegadores se determinado recurso pode ser 
 ou não acessado.*/

//1 Criar a rota para Servir API
// app.get('/',(request,response)=>{
    
//     return response.json([ {name: 'Marcio Costa'}, {name: 'Marcos Vella'} ])
// })

// 3 Consumindo uma API no backend
app.get('/', async (request, response) => {
    try{
    //4 response é a resposta do axios MAS eu tiro o data de dentro do response com o destructuring 
    //const response = await axios('https://jsonplaceholder.typicode.com/users')
    const {data} = await axios('https://jsonplaceholder.typicode.com/users')    
    return response.json(data)

       }catch(error){
           console.log('Houve um erro na requisição do backend')
        } 
    
})

app.listen(8090, ()=>{
    console.log('Sever running port 8090')
})

