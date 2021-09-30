## Vamos instalar o json server
* Um servidor que responderá com os dados em formato json

npm install -g json-server

criar o diretorio: mkdri http-couser e dentro criar o arquivo db.json

colar esse obejto no arquivo pelo vim(i para insert, ctrl + v, esc :wq):
{
"posts":[
   {"id":1, "title":"json-server", "author": "typicode"}
],
"comments":[
   {"id":1,"body":"some comment","postId": 1}
],
"profile": {"name":"typicode"}
}

iniciar o servidor: json-server --watch db.json

Dentro do servidor podemos ver os recursos adicionados
Resources
  http://localhost:3000/posts   
  http://localhost:3000/comments
  http://localhost:3000/profile 

  Home
  http://localhost:3000


Posso acessar o recurso pelo curl rodando: $ curl http://localhost:3000/posts

Dentro do servidor consigo ver os detalhes da requisição

Posso fazer um pedido curl para receber só o que tem nos headers mais o body rodando: curl -i http://localhost:3000/posts

O verbo OPTIONS vai nos informar a disponibilidade dos métodos da requisição:
curl -X OPTIONS http://localhost:3000/posts  -i
A informação estará dos metodos disponíveis permitidos estará em: Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE

## Metodo GET 
Server para pegar um recurso 
Somente recebe recursos	
Na request não se passa o body
Na response recebemos o body
Usamos em formulário, por exemplo formulario de busca

exemplo de uso: curl -v http://localhost:3000/posts          -- (-v verbose) detalhado
                curl    http://localhost:3000/posts\?q\=json -- (Posso passar filtros pela requisição)
                curl -I http://localhost:3000/posts          -- (I ver os cabeçalhos de resposta)


## Metodo HEAD
 Semelhante ao GET porém recebemos como resposta somente o cabeçalho
 Não tem body nem no request e nem no response

 exemplo de uso: curl -I http://localhost:3000/posts   
                 curl --head http://localhost:3000/posts (Posso ver o tamanho do arquivo sem precisar fazer o get completo)

## Metodo POST
Faz modificações no back-end

Através de uma chamada http atravé do POST podemos publicar/ cadastrar / Incluir um recurso em algum lugar 
Body(o corpo) existe na request e na response:
            Na request para cadastrar preciso enviar as informações que serão cadastradas;
            Na minha response recebemos pelo corpo pelo menos uma resposta que deu certo;
Usado em formulário por exemplo para cadastrar usuários

exemplo de uso: curl -d '{ "id": 2, "title": "test-post", "author": "marcio" }' -H "Content-type: application/json" -X POST http://localhost:3000/posts       
-- (-d são os dados) -- para enviar o corpo(body da requisição) pois quero criar alguma coisa
-- (-H) para configurar os HEADERS preciso falar o tipo do  cabeçalho então uso -H avisando que é um JSON
-- (-X) Preciso passar o tipo do método que vou usar, nesse caso o POST
-- Poir fim preciso passar a rota onde vou colocar isso

Como resposta será o proprio objeto que coloquei

(cat Usado para ver o conteudo do arquivo)

## Metodo PUT

Cria um novo ou atualiza um recurso 
A diferença entre o PUT e POST é que o PUT é idempotente não faz alteração na resposta, a resposta é sempre a mesma

Não é seguro pois faz alteração no servidor
BODY tem body no pedido request 
     não tem body na resposta response
     Não uso em formulário
exemplo de uso: curl http://localhost:3000/profile  -- Aqui veremos que retornará o name:
                vamos atualizar esse profile:
                curl -d '{"name": "Marcio Costa"}' -H "Content-type: application/json" -X PUT http://localhost:3000/profile
                Posso ver as informações do header com (-i): curl -d '{"name": "Marcio Costa"}'  -H "Content-type: application/json" -X PUT http://localhost:3000/profile -i


 ## Metodo PATCH
 Modificação parcial de um recurso
BODY -- vai precisar que eu envie (no corpo )o que desejo alterar no recusro
     -- Vai receber uma resposta de volta no (corpo)   
     Não uso em formulário

exemplo de uso: Para saber se nosso servidor está aceitando um PATCH faremos um -X OPTIONS na rota e dar uma olhada no header: curl -X OPTIONS http://localhost:3000/posts -i
        --> Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE
        Ai vou rodar: curl -d '{"title":"Uma nova Historia", "author":"Marcio Costa"}' -H "Content-type: application/json" -X PATCH http://localhost:3000/posts/1




## Metodo DELETE

 Serve para remover um recurso 
 BODY -- pode ser que seja necessário enviar na request
      -- pode ser que seja possível receber na response  

      exemplo de uso: Vamos ver a lista de posts
                      curl  http://localhost:3000/posts
                      curl  http://localhost:3000/posts/1  -- ver o post individualmente
                      curl  http://localhost:3000/posts/2

                      Para deletar o post 2:
                      curl -X DELETE http://localhost:3000/posts/2

                      Veremos que foi deletado:
                      curl  http://localhost:3000/posts/2 -i -- podemos ver o cabeçalho HTTP/1.1 404 Not Found
                      







