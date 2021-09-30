
const fs = require('fs/promises')

const oldPath = "./arquivos_base.txt";
const newPath = "./arquivos_base_new.txt";

fs.writeFile(oldPath, "Olá arquivos")
.then(()=>fs.rename(oldPath,newPath))
.then(()=>fs.readFile(newPath,'utf-8'))
.then(console.log)
.catch(console.error);