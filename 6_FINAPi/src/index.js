const express = require("express");
const { v4: uuidv4 } = require("uuid"); //importando v4 para gerar uuid
const app = express();
const port = process.env.PORT || 3333;

//10 Instalar o middleware para podermos receber um JSON
app.use(express.json());

// 2- criar um banco fake
const customers = []; //2 Será um array provisório

// 8 Criando o middleware
function verifyIfExistsAccountCPF(request, response, next) {
  // 9 O middleware rerece 3 paramentros, req res nextx

  const { cpf } = request.headers;
  const customer = customers.find((customer) => customer.cpf === cpf);

  if (!customer) {
    return response.status(400).json({ erro: "Custormer not found" });
  }

  request.customer = customer; //13 todos os middlewares que chamarem o verifyExistsAccountCPF vão ter acesso ao customer

  return next(); //9 Aqui é para o middleware seguir
}

// 26 Função para o balanço
function getBalance(statement) {
  // 27 Pegar as informações para o balanço do statement, statement será o parametro
  // 28 Lista o que entrou na conta, Listar o que saiu ,retornar o saldo
  const balance = statement.reduce((accumulation, operation) => {
    //32 Reduce pega todos os valores e transfoma em um valor somente
    //29 accumulation será a variável responsável por armazenar o valor que adicionamos ou removemos do objeto
    if (operation.type === "credit") {
      // 30 Se for credito
      return accumulation + operation.amount; // 31 Retonra o accumulation somado ao saldo
    } else {
      return accumulation - operation.amount; // 32 se não remova o valor do saldo
    }
  }, 0); //33 O ultimo parametro do reduce é o valor que vamos iniciar o nosso reduce nesse caso será 0
  return balance; //33 return o valor já com as operações feitas
}

// 1 criar a conta
app.post("/account", (request, response) => {
  const { cpf, name } = request.body;
  const customerAlreadyExist = customers.some(function (customer) {
    customer.cpf === cpf;
  });
  if (customerAlreadyExist) {
    return response.status(400).json({ error: "Customer already exists!" });
  }
  // 5- Inserir os dados no array de customers
  customers.push({
    cpf,
    name,
    id: uuidv4(), // Criar o uuid automaticamente
    statement: [],
  });
  //6- retorno se tudo der certo
  return response.status(201).send({message:"Conta Criada com sucesso"});
});

// 7 Listar o extrato
app.get("/statement", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request; // 14 Para recuperar os customer dentro do verifyIfExistsAccountCPF
  return response.json(customer.statement);
});

//15 Inserir um depósito
app.post("/deposit", verifyIfExistsAccountCPF, (request, response) => {
  //16 Usar o middleware para verificar se a conta existe
  // 17 Vamos receber um depósito, precisamos passar o valor e a descrição no body da request
  const { description, amount } = request.body;
  // 18 Inserir essa informação dentro do array statement
  const { customer } = request; //19 recuperando o meu customer de dentro do meu request e já validade se existe ou não
  // 20 Criar as operações de depósito e saque
  const statementOperation = {
    description,
    amount,
    created_at: new Date(),
    type: "credit",
  };
  //21 Inserir a operação para customer
  customer.statement.push(statementOperation);
  //22 Se tudo der certo retornar 201
  return response.status(201).send();
});

//23 Criar a operação de saque
app.post("/withdraw", verifyIfExistsAccountCPF, (request, response) => {
  const { amount } = request.body; // 24 Preciso passar o valor que vou sacar no body da request
  const { customer } = request; //25 Buscar o customer e preciso fazer o balanço ver o saldo

  //34 chamar o getBalance e passar o statement do customer
  const balance = getBalance(customer.statement);

  //35 verificar o saldo
  if (balance < amount) {
    return response.status(400).json({ error: "Insufficient funds!" });
  } // 36 caso seja possivel o saque vamos retornar a operação de débito
  const statementOperation = {
    amount,
    created_at: new Date(),
    type: "debit",
  };
  customer.statement.push(statementOperation); // 37 Passar operação para dento do statement

  // 38 retornar o status 201 deu certo
  return response.status(201).send();
});

//39 listar extrato por data
app.get("/statement/date", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request;
  //40 Receber a date por query paramns
  const { date } = request.query;
  //41 Verificar se existe um extrato para essa data
  const dateFormat = new Date(date + " 00:00"); // 42 Formatação a data, fazer um hack para obter qq horario do dia assim conseguimos fazer a busca independente da hora da trasasação

  //43 Encntrar todos os extratos daquela data
  const statement = customer.statement.filter(
    //44 Filter para encontrar somente os extrato do dia
    (statement) =>
      statement.created_at.toDateString() ===
      new Date(dateFormat).toDateString()
  );
  //45 Se encontrat retornar o extrato
  return response.json(statement);
});

//46 Atualizar os dados da conta -- alterar somente o name pois os outros dados são críticos
app.put("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { name } = request.body; // 47 Pegar o name no body da request

  const { customer } = request; // 48 Pegar o customer na request

  customer.name = name; // 49 Alterar o name do customer

  return response.status(201).send();
});

//50 Obter informações da conta para retornar após a atualização
app.get("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request; //51 Pegar o customer de dentro da request

  return response.json(customer); //52 retornar o customer na response;
});

//53 Deletar uma conta
app.delete("/account", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request.body; //54  Pegar o custormer no body da request

  customers.splice(customer, 1); //55 Delete do array de customers usando o splice(); -- Splice espera 2 parametros 1º Inicio 2º Até onde queremos deletar

  return response.status(200).json(customers); // 56 Se deu certo retornar o status 200 e o restante de customers que sobrou
});

//57 Retornar o saldo
app.get("/balance", verifyIfExistsAccountCPF, (request, response) => {
  const { customer } = request; //58 Pegar o customer da request

  const balance = getBalance(customer.statement); //59 Chamar a função getBalance buscar o extrato do customer

  return response.json(balance); //60 Retorno o saldo
});
app.listen(port, () => {
  console.log(`Server running port ${port} `);
});
