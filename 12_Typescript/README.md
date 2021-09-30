## Usando o Typescript no projeto
- [x] iniciando o projeto -- yarn init -y
- [x] intalar o express --  yarn add express
- [x] Criar a pasta src
- [x] Criar a pasta server.ts -- Ao usar o typescript devemos usar a extensão .ts
- [x] importar o express -- import express from 'express';
- [x] Criar o app -- const app = express();
- [x] Para ter acesso aos tipos de outras bibliotecas devemos instalar -- @types/express -D
- [x] Criar o listen
- [x] Criar a primeira rota
- [x] Para rodar precisamos converter de uma forma que o node entenda, 1º intalar o typescript--yarn add typescript -D
2º Inicializar o typescript -- yarn tsc --init; 
- [x] Para criar outros arquivo js no projeto vamos criar uma outra pasta, precisamos mudar o outDir no arquivo tsconfig.json para --  "outDir": "./dist", criará a pasta dist que receberá os arquivos js 
- [x] Agora vamos criar para converter -- yarn tsc
- [x] Facilitar o reload -- ??
- [x] Criar uma pasta CreateCousrseService.ts dentro de src que será o service
- [x] Criar a classe CreateCousrseService
- [x] Criar uma pasta routes.ts dentro de src
- [x] Na pasta routes dar um export na função createCourse
- [x] Importar para dentro do routes.ts o Request e o Response de dentro do express
- [x] Tipar o request e o response
- [x] Exportar o CreateCourseService já instanciado e importar ele no routes.js 
- [x] Passar CreateCourseService.execute() para dentro da function e dar um send de return
- [x] Passar para dentro da rota get no server.ts a função createCourse 
- [x] Teste yarn tsc e de dist/node server.js

- [x] Vamos criar uma interface para receber o que vamos passar para dentro da função
- [x] Como usei desestruturação ao criar a função execute ao chamar essa função no sever preciso mudar os parametros  dentro do createCourse para objeto

- [x] Definir um parametro como obrigatorio ou opcional -- usamos o ? antes do : no atributo na interface
- [x] Definir um valor default p/ atributo, nos parametros da função definimos o valor: execute({duration=8, educator, name}:Course){
