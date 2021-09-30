const http =require('http');

const hostname = '127.0.0.1';
const port = 3000;

// O server vai receber um request e retornar um response
const server = http.createServer((req, res)=>{
    //1 - Aqui dentro da function é o que será enviado para o cliente
    res.statusCode = 200;
    res.setHeader('Content-type', 'text-plain');
    res.end('Hello Word!');
})

server.listen(port,hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`)
})