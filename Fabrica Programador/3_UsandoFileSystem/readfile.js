const fs = require('fs/promises')

const fileNamePath = "./arquivos_base.txt";

fs.readFile(fileNamePath, "utf-8").then(console.log).catch(console.error)