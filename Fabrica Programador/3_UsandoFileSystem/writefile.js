const fs = require('fs/promises')

const fileNamePath = "./arquivos_base.txt";
const content = "Olá arquivos Olá arquivos Olá arquivos ";

fs.writeFile(fileNamePath, content ).then(console.log).catch(console.error)
