## Request é um pedido ao servidor

Essa comunicação é via protocolo http

## Response é a resposta do servidor

Request usando o GET  --> Quero trazer alguma coisa do servidor
Posso fazer varias rotas GET:/Produto      --> Trazer uma Lista de produtos
                             /Cliente      --> Trazer uma lista de cliente   
                             /Clinte/id10  --> Trazer um cliente especifico
                             /Produto/id10 --> Trazer um produto específico

Request usando o POST --> Quero enviar dados para o servidor
Posso fazer varias rotas POST: /Produto      --> Cadastrar produtos
                               /Cliente      --> Cadastrar cleintes
                                
Request usando o PUT  --> Quero modificar os meus dados salvos no servidor
Request usando o DELETE --> Quero deletar alguma informação do servidor


app.servidor 
----------
|        | -----------> Serve para nós paginas HTML
|        |  tbm pode servir
|        | -----------> Serve para nós API JSON
----------

Existe aplicação server side e client side



// app.get("/", (req, res) => {
//   const home = path.join(__dirname,'public','home.html') // Estou recebendo a pagina home.html dentro da public dentro do diretório
//   res.sendFile(home)
// });
// Ao inves de fazer a rota raiz podemos usar o conceito de pagina statica usando o express




// Middleware que intercepta o request e  response e envia a informação de LOGGED no console
const myLogger = function (req, res, next) {  
  console.log("LOGGED");
  next();
};
//Middleware que intercepta o request e o response e envia a data do cadastro
const requestTime = function (req, res, next) {
  req.requestTime = { time: Date.now() };
  next();
};
// Adicionando os middlewares
app.use(myLogger);
app.use(requestTime);


### Intalar o mongo DB
https://docs.mongodb.com/manual/installation/


## Utilizando o mongoDb Atlas e Conectando ao Compass
- [x] Criar a conta free
- [x] Atualizar o nome do projeto no atlas
- [x] Iniciando a comunicação remota com network Access 
- [x]  Informar a lista de IP que poderá fazer a comunicação remota inicialmente vamos deixar liberado mas depois devemos por restrições
- [x] Adicionar um usuário Database Access 
- [x] Conectar com o Compass, copiar o endereço primary no Atlas - cluster0-shard-00-01.rjv1t.mongodb.net -- Não precisa da porta
- [x] Colar o endereço no hotname do Compass e informar  a authentication username/password e informar a senha e usuarioi criado
- [x] Agora já estamos conectados ao banco e podemos criar o banco e as collections


## Fazer a comunicação com o mongo shell
- [x] Acessamos o nosso cluster 
- [x] Depois vamos em connect
- [x] Depois Connect with the MongoDb Shell 
- [x] Instalar o mongoshell -- Corrigir o nome do banco 
- [x] Copiar a string de acesso ao banco e colar no terminal(cdm) mongosh "mongodb+srv://cluster0.rjv1t.mongodb.net/escola" --username admin  
- [x] Colocar a senha
-- Agora ja estou conectado ao banco remoto
Comandos para confirmar: confirmar banco -- db escola
                         ver os bancos -- show dbs
                         usar o banco -- use db_name
                         ver as collections -- show collections
                         ver os usuarios -- db.usuarios.find()
                         Inserir um usuario -- db.usuarios.insertOne({"nome": "Maria", "email":"maria@dev.com"}) 

## Fazer a comunicação da Aplicação com o mongo

https://mongoosejs.com/docs/index.html -- 
- [x] Instalar o mongoose npm install --save
- [x] Ir no cluster clicar em connect e copiar a linha de conexão com mongoose 
mongodb+srv://admin:<password>@cluster0.rjv1t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongodb+srv://admin:42100123@cluster0.rjv1t.mongodb.net/escola?retryWrites=true&w=majority 


## Usar o import from EC6

Precisamos setar: "type": "module" no package-json

## Usar o .env
Precisamos instalar: npm install dotenv


## codigos do usuario- service quando usa o usuario-repo-array
//this.usuarios = []; tirei a responsabilidade do usuario service de fazer a persistencia
                                                      //this.usuarioRepository = new UsuarioRepoArray()// Esse usuarioRepository é o que agora irá cuidar das persistencia de usuarios no array
                                                      // Ele vai guardar uma instancia do UsuarioRepoArray e terá todos os seus métodos
                                                      // Como se fosse uma cebola em camadas(encapsulando) a funcionalidade de persisitir
                                                      //Agora vamos usar o repoMongo

//this.usuarios.push(usuario); // Agora vou adicionar no array com a função do UsuarioRepoArray                                                      

// Para excluir precisamos localizar o indice dele no array
                                          //const i = this.usuarios.findIndex((objetoDeUsuarios) => objetoDeUsuarios.email == email);
                                          // Após localizar vamos excluir com o splice
                                          // this.usuarios.splice(i, 1);

// this.usuarios.forEach((objetoDeUsuarios) => {
                                              //   if (objetoDeUsuarios.email == usuario.email) {
                                              //     objetoDeUsuarios.nome = usuario.nome ? usuario.nome : objetoDeUsuarios.senha;
                                              //     objetoDeUsuarios.senha = usuario.senha ? usuario.senha : objetoDeUsuarios.senha;
                                              //   }
                                              // });                                          

//return this.usuarios;
                                                


## Lista dentro do usuario-routes

//Lista
// Pode ser de dois modos:
// router.get("/usuario", (req,res)=>{
//   usuarioController.buscarTodos(req,res)
// });                                                