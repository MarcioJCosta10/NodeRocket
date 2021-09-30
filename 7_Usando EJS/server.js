const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.set("view engine", "esj"); // Setar o EJS p

app.get("/",(request, response)=>{
    const items =[
        {
            title: "D",
            message: "esenvolver aplicações/serviços de forma fácil!"
        },
        {
            title: "E",
            message: "JS usa JavaScript para rendereizar HTML!"
        },
        
        {
            title: "M",
            message: "uito fácil de usar!"
        },        
        {
            title: "A",
            message: "inda falta muito mas já estou bem!"
        },
        {
            title: "I",
            message: "nstall ejs"
        },
        {
            title: "S",
            message: "intaxe simples"
        },
    ];
    
    const subtitle = "Uma linguagem para criação de páginas HTML utilizando JavaScript!"

    response.render("../views/pages/index.ejs",{
        qualitys: items,
        subtitle: subtitle
    })
})

app.get("/sobre",(request, response)=>{
    response.render("../views/pages/about.ejs")
})

app.listen(port,()=>console.log(`Server running in localhost:${port}`))