# NPM
Node Package Manager

__Glossary: Dependencies, Packages, Modules__

- [x] Verificar se temos o NMP instalado `nmp -v` 
- [x] Iniciar o npm: npm init -y
- [x] Outro modo de instalar os pacotes é npm i ou npm install 
- [x] Podemos isntalar varios pacotes de uma só vez npm install nome_package nome_package nome_packagen
- [x] Para atualizar os pacotes npm update
- [x] para atualizar os pacote  yarn upgrade-interactive --latest 
- [x] Iniciar o NPM npm init ou npm init -y
- [x] Criar pacotes como dependencia de desenvolvimento npm install nome_package -D
- [x] Criar nosso próprio pacote 
- [x] O que é o arquivo package.json
- [x] Utilzar modulos de terceiros
- [x] O que é o diretório node_modules
- [x] O que é o arquivo package-lock.json Não devemos deletar pois deixará o projeto mais rápido
- [x] Criar scripts para rodar com o npm run start
- [x] Instalar pacotes de modo global npm install name_package -g
- [x] Para remover um package instalado de maneira global npm uninstall name_package -g
- [x] Para saber onde está instalado um package de maneira global npm root -g
- [x] Mudar a versão dos packages instalados npm install name_package@1.5.1
- [x] Ver as versões disponíveis para atualizar o package npm outdate
- [x] Atualizar a versão do package npm upgrade
- [x] Pegar a ultima versão do package npm install name_package@latest

    ^2.29.1
    major.minor.patch
    patch   -- Significa que está resolvendo algum bug dentro desse pacote
    minor   -- vai fazer alterações mas não vai quebrar esse package
    major   -- é a versão do projeto e poderá até quebrar esse package
    ^       -- Significa que sempre que atualizar vai quebrar o minor e patch desse package
    ~       -- Vai atualizar só o patch desse package
    2.29.1  -- vai manter sempre a mesma versão fixa desse package
    *       -- vai mudar todas as versões

- [] Desinstalar package npm uninstall name_package







