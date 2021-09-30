#FinAPI - Financeira

---

### Requisitos 
- [x] Deve ser possível criar uma conta 
- [x] Deve ser possível buscar o extrato bancário do cliente
- [x] Deve ser possível realizar um depósito
- [x] Deve ser possível realizar um saque
- [x] Deve ser possível buscar o extrato bancário do cliente por data
- [x] Deve ser possível atualizar dados da conta do cliente
- [x] Deve ser póssível obter dados da conta do cliente
- [x] Deve ser possível deletar uma conta
- [x] Deve ser possível retornar o balance da aplicação

---

### Regras de negócio

- [x] Não deve ser possível cadastrar uma conta com CPF já existente
- [x] Não deve ser possível buscar extrato de uma conta não existente
- [x] Não deve ser possível fazer depósito em uma conta não existente
- [x] Não deve ser possível fazer saque de uma conta não existente
- [x] Não deve ser possível fazer saque quando o saldo da conta for insuficiente
- [x] Não deve ser possível excluir uma conta não existente


## Passo a passo

// 1 criar a conta
/**
 * Dados que nossa conta terá
 * cpf  - string
 * name - string
 * id- uuid - precisa instalar a biblioteca uuid
 * statement[] 
 * 
 */ 
    
app.post("/account", (request, response) => {
    const {cpf, name} = request.body;                   //1  Dados a ser enviados no request

     // 3 Validar o cpf           //4 A função some() vair percorrer o array customers e retorna v/f se existir o cpf 
    const customerAlreadyExist = customers.some(function(customer) { customer.cpf === cpf}
    ); 

    if(customerAlreadyExist){
        return response.status(400).json({error: "Customer already exists!"})
    }   

    // 5- Inserir os dados no array de customers depois que pegar os dados
    customers.push({
        cpf,
        name,
        id: uuidv4(),// Aqui sera criado o uuid automaticamente
        statement:[] // Aqui é onde irá os dados do extrado
    });

    //6- se tudo der certo será esse o retorno
return response.status(201).send();
    
});
--------------------------------------------------------------------------------------------
// 7 Listar o extrato
app.get("/statement", verifyIfExistsAccountCPF, (request, response)=>{ // 15 Para usar o middleware deve ser incluso entre o req res e a rota, podemos  ter varios middlewares
   //18 Para recuperar os customer dentro do verifyIfExistsAccountCPF
  
   const {customer} = request;

    // 8 Para listar precisamos saber quem é o cliente vamos pegar o cliente pelo route params
    
    //const {cpf} = request.headers;// 11 Aqui vou passar o parametro para a API pelo headers

    //9 percorrer o array de customers procurar um cpf igual ao passado o find retorna os dados do objeto
    //const customer = customers.find(customer => customer.cpf === cpf); 
    // // 10 ver se a conta existe
    
    // if(!customer){
    //     return response.status(400).json({erro: "Custormer not found"});
    // }
   
    return response.json(customer.statement);

});
//11 Posso usar o middleware dessa outra forma caso eu queira que todas as rotas utilizem o middleware
//12 Caso seja assim tudo que vier abaixo irá passar pelo middleware
//app.use(verifyExistsAccountCPF);

-------------------------------------------------------------------------------------------------
//19 Criando a rota para inserir um depósito
app.post("/deposit", verifyIfExistsAccountCPF, (request, response)=>{ // 20 Usar o middleware para verificar se a conta existe
    // 21 como vamos receber um depósito precisamos saber o valor e qual descrição 
    const {description, amount} = request.body;
    // 22 Agora vamos inserir essa informação dentro do statement
    const {customer} = request; //23 recuperando o meu customer de dentro do meu request e já será verificado se existe ou não
    // 24 vou criar as operações de depósito e saque
    const statementOperation = {
        description,
        amount,
        created_at: new Date(),
        type: "credit"
    }
    //25 Como inserir essa operação dentro do meu customer
    customer.statement.push(statementOperation);
    //26 Se tudo der certo podemos retornar 201
    return response.status(201).send();
});

--------------------------------------------------------------------------------------------------------
// 42  Vamos listar um extrato por data
app.get("/statement/date", verifyIfExistsAccountCPF, (request, response)=>{
    const {customer} = request;
    //43 vamos receber a date por query paramns
    const {date} = request.query;
    //44 Precisamos verificar se existe um statement para essa data que queremos buscar para isso vou fazer uma formatação
    const dateFormat = new Date(date + " 00:00"); // 45 vamos fazer um hack para obter qq horario do dia assim conseguimos fazer a busca independente da hora da trnasação

    // 46 Precisamos encntrar todos os statement do usuário daquela data
                        // 47 vamos fazer um filter para encontrar somente os statement do dia
    const statement = customer.statement.filter((statement)=>statement.created_at.toDateString() === new Date
        (dateFormat).toDateString())
    //48 se ele encontrar pediremos para ele retornar o statement
    return response.json(statement);
})

-------------------------------------------------------------------------------------------------
// 49 Vamos atualizar os dados da conta vamos usar o put no nosso account
app.put("/account", verifyIfExistsAccountCPF, (request, response)=>{
    //50 Poderemos alterar somente o name pois os outros dados são críticos
    // 50 Vamos pegar então o name dentro do nosso body
    const {name} = request.body;
    // 51 vamos pegar também o nosso customer
    const{customer} = request;
    // 52 vamos alterar o name dentro do customer
    customer.name = name;
    // 53 Se tudo der certo vamos retornar 201
    return response.status(201).send();
       

})
-----------------------------------------------------------------------------------
//54  obter as informações da conta para retornar após a atualização
app.get("/account",verifyIfExistsAccountCPF,(request,response)=>{
    //55  precisamos pegar o customer de dentro do request
    const {customer}=request;
    //56 retornar esse customer no response;
    return response.json(customer);
})
----------------------------------------------------------------------------------
//57 Vamos agora deletar a conta
app.delete("/account", verifyIfExistsAccountCPF,(request,response)=>{
    //58 Pegar o custormer
    const {customer}= request.body;
    //59 para fazer o delete dentro do array de customers temos algumas formas e vamos usar o splice();
    //59 O splice() vai esperar dois parametros:
    //59 o primeiro é onde vai iniciar esse splice 
    //59 o segunto é até onde esperamos que seja feito essa remoção
    customers.splice(customer, 1);

    // 60 Para ver se deu certo vamos retornar o status 200 e o restante de customers que sobrou
    return response.status(200).json(customers)

})

--------------------------------------------------------------------
//61  Vamos retornar o balance
app.get("/balance", verifyIfExistsAccountCPF, (request, response)=>{
    //62  Precisamos pegar o customer
    const {customer} = request;

    //63 Vou chamar o meu balance
    const balance = getBalance(customer.statement);

    //64 Aqui eu retorno o meu balance
    return response.json(balance);

})