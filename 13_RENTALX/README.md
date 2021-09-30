## Iniciando o projeto
- [x] iniciando o projeto -- yarn init -y
- [x] intalar o express --  yarn add express
- [x] Criar a pasta src
- [x] Criar a pasta server.ts 
- [x] Instalar -- @types/express -D
- [x] Intalar o typescript--yarn add typescript -D
- [x] Inicializar o typescript -- yarn tsc --init;
- [x] mudar o outDir no arquivo tsconfig.json para --  "outDir": "./dist"
- [x] Criar pasta de convertidos -- yarn tsc
- [x] Instalar a extensão no VS do Eslint
- [X] Fazer o VSCode formatar o código sempre que salvarmos algum arquivo, adicionar uma opção chamada codeActionsOnSave nas configurações no vsCode: Preferences/Configurações/ abrir as configurações de JSON no canto superior direito e adicionar ao JSON: "editor.codeActionsOnSave": {   "source.fixAll.eslint": true }

- [x] Adicionar o Eslint como dependecia de dev: --yarn add eslint -D
- [x] Inicializar o eslint -- yarn eslint --init  duvidas: <https://www.notion.so/ESLint-e-Prettier-Trilha-Node-js-d3f3ef576e7f45dfbbde5c25fa662779#eaf6e8bdcabc4d809cdae302e29750da>

- [x] Adicionar as dependencias manualmente: 
    yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.22.1 
@typescript-eslint/parser@latest -D

- [x] instalar um plugin que irá nos auxiliar a organizar a ordem dos imports dentro dos arquivos e outro para permitir importações de arquivos TypeScript sem que precisemos passar a extensão do arquivo: -- yarn add -D eslint-plugin-import-helpers eslint-import-resolver-typescript

- [x] criar na raiz do projeto um arquivo .eslintignore com o conteúdo abaixo para ignorar o Linting em alguns arquivos: /*.js node_modules dist 
- [x] Configurar arquivo que foi gerado na inicialização do ESLint, o .eslintrc.json:
- [x] Adicionar dentro de "env" a linha: "jest": true
- [x] Dentro de "env", verifique se a primeira linha está como "es2020": true
- [x] Adicionar dentro de "extends" a linha: "plugin:@typescript-eslint/recommended"
- [x] Adicione o seguinte dentro de "plugins": "eslint-plugin-import-helpers"
- [x] Adicionamos dentro de "rules" as seguintes configurações: 
"camelcase": "off",
"import/no-unresolved": "error",
"@typescript-eslint/naming-convention": [
  "error",
  {
    "selector": "interface",
    "format": ["PascalCase"],
    "custom": {
      "regex": "^I[A-Z]",
      "match": true
    }
  }
],
"class-methods-use-this": "off",
"import/prefer-default-export": "off",
"no-shadow": "off",
"no-console": "off",
"no-useless-constructor": "off",
"no-empty-function": "off",
"lines-between-class-members": "off",
"import/extensions": [
  "error",
  "ignorePackages",
  {
    "ts": "never"
  }
],
"import-helpers/order-imports": [
  "warn",
  {
    "newlinesBetween": "always",
    "groups": ["module", "/^@shared/", ["parent", "sibling", "index"]],
    "alphabetize": { "order": "asc", "ignoreCase": true }
  }
],
"import/no-extraneous-dependencies": [
  "error",
  { "devDependencies": ["**/*.spec.js"] }
]
- [x] basta adicionar logo abaixo das "rules" no .eslintrc.json o seguinte:"settings": 
{
    "import/resolver": {
      "typescript": {}
    }
  }
- [x] Configurar o Prettier e ESLint: Desabilitar o prettier do Vscode -- yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
- [x] modificar o arquivo .eslintrc.json adicionando no "extends" as seguintes regras: "prettier","plugin:prettier/recommended"
- [x] Nos "plugins" vamos adicionar apenas uma linha com: "prettier"
- [x] E nas `"rules"` vamos adicionar uma linha indicado para o **ESLint** mostrar todos os erros onde as regras do **Prettier** não estiverem sendo seguidas, como abaixo:
- [x] Para Windows -- Iremos instalar uma extensão chamada EditorConfig for VS Code. Com ela instalada, na pasta raiz dos nossos projetos podemos clicar com o botão direito do mouse onde estão as pastas do projeto e escolher a opção Generate .editorconfig:

## Configurar mais alguns detalhes

- [x] Criar a pasta src
- [x] Criar server.ts 
- [x] importar express
- [x] instanciar o app
- [x] Levantar o servidor
- [x] Para não precisar converter toda vez de ts para js vamos usar uma ferramenta: yarn add ts-node-dev -D
- [x] No package.json criar o script: "scripts":{"dev": "ts-node-dev --transpile-only --ignore-watch node_module --respawn src/server.ts"} 
- [x] Criar uma rota get para ver se vai funcionar
- [x] dentro do tsconfig.josn desabilitar: //"strict": true

## Configurando o Debbug do código
- [x] Criar uma rota POST e receber pelo request.body o nome do curso que quero cadastrar retornar um json com o nome do curso para a aplicação
- [x] Criar o request dentro do insomnia e veremos que dará um erro: Posso dar um console.log(request.body) para ver ser estou recebendo o name e veremos que está undefined
- [x] Posso usar o debbug do vs code: clique no debug, depois criate a file launch.json e escolher node.js
- [x] Dentro do launch.json mudar:  "type": "node","request": "attach" -- E remover:    "program": "${workspaceFolder}\\src\\server.ts",
- [x] Ir no package.json e dentro do script dev: Adicionar a flag --inspect : Para o debbug se conectar com a aplicação
- [x] Iniciar o debbuger e colocar o break point: ctrl+clique na linha para debugar e rodar novamente o send no insomnia


## Iniciar a aplicação
- [x] Criar a pasta routes para separar as rotas da aplicação
- [x] Criar o arquivo: categories.routes.ts
- [x] Criar a rota POST
- [x] Criar uma array de categories
- [x] Adicionar as informações ao array: categories.push({})
- [x] Importar categoriesRoutes de dentro do server.ts
- [x] Intanciar a rota no server: app.use(categoriesRoutes)

- [x] Gerar o uuid, adicionar: yarn add uuid
- [x] Adicionar os tipos para o uuid:yarn add @types/uuid -D
- [x] Importar a v4 de dentro do uuid na categories.routes.ts e renomear v4 para uuidV4

- [x] No middleware app.use(categories) no server.ts criar um path para não precisar passar varias vezes a mesma informação: app.use("/categories",categoriesRoutes)
- [x] No categories.routes.ts alterar a rota: categoriesRoutes.post('/', (request, response)=> -- Assim saberá que o path inicial será: /categories

- [x] Criar um modelo para a categoria: Criar uma pasta model
- [x] Criar a pasta dentro de model: Category.ts
- [x] Criar uma classe: class Category{} e dar um export{Category}
- [x] Criar os atributos dentro da classe, o uuid será também do tipo string e opcional ?
- [x] Mudar o array para um array de classe Category: const categories: Category[] = [];
- [x] Mudar o objeto category para o tipo Classe Category: const category: Category = {}
- [x] Inserir e instanciar o atributo como: created_at: new Date()
- [x] Tirar a responsabilidade de criar o uuid da rota: criar um construtor(){} na Classe Category.ts
- [x] Fazer uma verificação dentro do construtor:
- [x] importar o uuidV4 para a classe Category.ts
- [x] Remover a responsa de criar o uuid de dentro do obejto category do categories.routes.ts e atribuir ao construtor
- [x] Deixar o atributo de uuid dentro do construtor na classe Category como opcional: id?: string;
- [x] Chamar o construtor da classe Category no categories.routes.ts para o objeto category:  const category = new Category()
- [x] Usar a função: Object.assingn() dentro do objeto category para passar os atributos que deverá ter o objeto category e deletar o modo antigo:

# Criando um repository: será uma camada/classe que fará toda a manipulação de dados na aplicação: fará o acesso ao bd, cadastro etc
- [x] Criar um pasta de repositories
- [x] Criar o arquivo CategoriesRepository.ts
- [x] Criar a classe CategoriesRepository e exportar
- [x] Tirar o array das rotas e colocar no CategoriesRepository.ts
- [x] Mudar o tipo de acesso ao atributo const categories: Category[]= [] para private categories: Category[]= []
- [x] Importar o Category de dentro do model no CategoriesRepository.ts
- [x] Remover a inicialização do Category e colocar no construtor: constructor(){this.categories = []};
- [x] Criar uma função create() na Classe CategoriesRepository.ts, será resposável por criar a nossa categoria na tabela
- [x] Mudar a inserção no array para: this.categories.push(category) 
- [x] Para receber os dados da nossa rota: vamos criar um DTO => Data Transfer object CategoriesRepository.ts
- [x] Criar uma interface ICreateCategoryDTO no: CategoriesRepository.ts com os atributos
- [x] Passar para dentro da função create o objeto do tipo ICreateCategoryDTO
- [x] Caso o eslint reclame da função create sem retorno passaremos um :void
- [x] No categories.routes.ts importar e instanciar o CategoriesRepository
- [x] Chamar a função categoriesRepository.create() dentro da nossa rota categories.routes.ts
- [x] Passar um objeto como parametro para dentro da função create({name, description}) com o name e description
- [x] Remover o json e a mensagem de retorno 
- [x] Remover a importação: import { Category } from '../model/Category';

## Listar as categorias do array/tabela
- [x] Criar o metodo list() dentro da classe CategoriesRepository.ts
- [x] list() vai retornar um array[] return this.categories; 
- [x] Criar na categories.routes.ts uma rota get()
- [x] Chamar dentro da rota get o list()
- [x] Criar o get no insomnia apontando para /categories

## Validar cadastro de categoria
- [x] Criar uma função: findByName() na CategoriesRepository.ts com um paramentro name: string e retornar um objeto Category
- [x] Usar o find() para percorrer o array de categorias e ver se já existe um nome igual
- [x] No categories.routes.ts vamos criar um categoryAlreadyExists dentro do post antes de criar uma categoria
- [x] Se já existir um name de Category igual retonará um erro

## Trabalhando SOLID na aplicação
S - SRP Single Responsbillity Principle (Princípio da Responsabilidade Única)
Deixar a rota com a sua resnposabilidade correta separando 
- [x] Criar uma pasta de service na src
- [x] Criar o service para criar uma categoria CreateCategoryService.ts
- [x] Criar a classe CreateCategoryService
- [x] Exportar a classe CreateCategoryService
- [x] Criar o método execute() responsavel por executar o create
- [x] Tirar a verificação e criação de dentro da rota POST
- [x] Criar uma Interface para receber as inforações do request na classe  CreateCategoryService
- [x] No execute efetuar desestruturação para receber os paramentros do request da interface
- [x] Alterar o retorno de erro incluindo:  throw new Error() Na validação da classe
- [x]  
I - DIP Dependency Inversion Principle (Principio da Ibnversão de Dependencia)
- [x] Criar o construtor da classe com o tipo de acesso private: constructor(private categoriesRepository: CategoriesRepository){} para termos acesso ao this
- [x] Usar o this para pegar os valores do construtor: this.categoriesRepository
- [x] Definir o tipo de retorno da classe: void
- [x] No post criar o service para termos acesso ao execute: const categoriesRepository = new CategoriesRepository();
- [x] Chamar o execute() passando o name e description no post: createCategoryService.execute({name,description})

L - LSP Liskov Substituion Principle (Principio da Substituiçao de Liskov)
O CreateCategoryService está muito atrelado ao CategoriesRepository, no caso de usar outro repositorio teriamos que mudar o que ele está recebendo no construtor

- [x] Criar no repositories uma interface: ICategoriesRepository.ts
- [x] Definir a Interface em ICategoriesRepository.ts
- [x] Criar o metodona Interface: findByName(name: string): Category; list(): Category[];
    create(name:string, description:string): void;
- [x] exportar a Interface
- [x] Agora vou implementar o Postgres: Criar na pasta repositories: PostgresCategoriesRepository.ts
- [x] Criar a classe PostgresCategoriesRepository implementando ICategoriesRepository
- [x] Exportar PostgresCategoriesRepository
- [x] Implementar os metodos da ICategoriesRepository na PostgresCategoriesRepository usando um shortcut do VScode: selecionar a classe ctrl+. implementar a interface

Assim PostgresCategoriesRepository é um subtipo de ICategoriesRepository
Agora vou fazer o CategoriesRepository.ts ser um subtipo de ICategoriesRepository
- [x] A classe CategoriesRepository deverá implementar ICategoriesRepository
- [x] Recortar a ICreateCategoryDTO{} e colocar dentro da ICategoriesRepository e exportar
- [x] Usar essa ICreateCategoryDTO{} no create da ICategoriesRepository 
- [x] Mudar o metodo create na de PostgresCategoriesRepository passando ICreateCategoryDTO{}
- [x] Importar ICreateCategoryDTO{} no CategoriesRepository 

Agora os dois repositórios estão implementando a interface ICreateCategoryRepository então eles são subtipos de ICreateCategoryRepository

- [x] No CreateCategoryService.ts no construtor da Classe vamos receber a ICategoryRepository
- [x] Corrigir os imports de CreateCategoryService.ts

Agora na rota posso mudar o repositorio de: const createCategoryService = new CreateCategoryService(categoriesRepository); para PostgresCategoriesRepository() que funcionaria da mesma forma, agora a responsabilidade pois qualquer classe que implementar a Interface ICategoryRepository vai funcionar


## Cadastrar nossa especidicação
- [x] Criar na pasta model o arquivo Specification.ts
- [x] Criar a classe Specification e exportar ela
- [x] As informações que a Specification terá são as mesmas da Category então copiar as informações
- [x] Criar o Service CreateSpecificationService.ts
- [x] Crair a Classe CreateSpecificationService e exportar
- [x] Criar o metodo execute() na classe CreateSpecificationService para receber os parametros 
- [x] Criar a pasta modules para isolarmos ainda mais nossa aplicação
- [x] Definir o modulo inicial de cars e colocar as pastas relacionadas aos carro nessa pasta cars
- [x] Crir o arquivo ISpecificationsRepository  dentro de repositories
- [x] Criar a Interface  ISpecificationsRepository{}
- [x] Criar o metodo create() dentro da interface
- [x] Criar o DTO do metodo create()
- [x] Receber o DTO no parametro do metodo create com o retorno void e exportar ISpecificationsRepository
- [x] Criar o arquivo SpecificationRepository.ts criar a classe SpecificationRepository{} implementando a Interface ISpecificationsRepository e exportar
- [x] Ctrl+. para implementar o metodo create dentro da classe, exportar e importar ICreateSpecificationDTO
- [x] Criar o repositorio de Specification: criar a tabela fake dentro do SpecificationRepository: private specification: Specification[];
- [x] Importar o modulo Specification dentro do SpecificationRepository
- [x] Inicializar dentro construtor o array Specification[]
- [x] Dentro do create criar a nossa specificação
- [x] Trazer o objeto para dentro do metodo create com Object.assign({})
- [x] Inserir os dados do specification no array: this.specification.push(specification)
- [x] Criar o service de specificação no CreateSpecificationService.ts 
- [x] criar o construtor passando como parametro private para ter acesso ao this.
- [x] Ainda dentro do construtor criar a variavel do repositorio que será do tipo inteface: ISpecificationsRepository
- [x] Criar uma interface Irequest que receberá o name e description
- [x] Fazer a desestruturação da IRequest dentro do execute({}:IRequest):void retornando void
- [x] Instanciar um objeto: new SpecificationRepository()
- [x] Criar a validação caso a specification já existir: criar o metod find dentro da ISpecificationsRepository recebendo o name como parametro do tipo : Specification;
- [x] Implementar o método findByName dentro da classe SpecificationRepository.ts
- [x] Fazer a verificação dentro do CreateSpecificationService
- [x] Chamar o create no CreateSpecificationService passando o nome e a descrição

- [x] Criar o arquivo dentro de routes: specification.routes.ts
- [x] Criar a rota POST
- [x] Imporar o Router do express
- [x] Criar o specificationRoutes que vai receber o Router
- [x] Exportar o specificationRoutes
- [x] Criar o service createSpecificationService: new CreateSpecificationService() dentro da rota passando parametro o repository
- [x]e importar esse modulo: CreateSpecificationService
- [x] Instanciar um novo objeto SpecificationRepository()
- [x] Importar esse módulo SpecificationRepository
- [x] Passar o specificationRepository como parametro para a criação do servico
- [x] Receber o name e a description no body da request
- [x] Chamar o execute do createSpecificationService 
- [x] Retornar a mensagem de sucesso caso for criado
- [x] Criar a rota get para listar todas as specification
- [x] chamar o metodo list dentro do get e atribuir a variavel const all
- [x] retornar no response o  e passar no json() a variavel all
- [x] Agora que a rota está criada devemos importar a rota no server: app.use('/specification',specificationRoutes)




