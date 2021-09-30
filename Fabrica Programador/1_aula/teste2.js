const http =require('http');

const hostname = '127.0.0.1';
const port = 3010;

const server = http.createServer((req, res)=>{
 if (req.url==="/"){
     // res é usado para entregar dados para o frontend
     res.end("{titulo: Pagina Inicial}")
    
 }else if(req.url ==="/cliente"){
    // Podemos entregar para o front end hmtl
     res.end("<h1>Clientes </h1> <img src= 'https://c.tenor.com/lhL3FnqVMqEAAAAC/shyporter-elan.gif'>",)
 }else if(req.url === "/bananas"){
    // Podemos entregar para o front end - JSON ou string
     res.end(JSON.stringify({titulo: 'banana', img:'https://4.bp.blogspot.com/-NJbEeorV1Y0/U9P0tNGuFyI/AAAAAAABi8I/EHan9410sVE/s1600/15.jpg'}))
 }else{
     res.end(JSON.stringify({"titulo":"rota inexistente"}))
 }


})

server.listen(port,hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}`)
})