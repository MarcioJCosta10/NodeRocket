const fs = require('fs/promises')
//Caminho
const dirPath = 'C:/Users/NMULTIFIBRA/OneDrive/Desktop/Fabrica Programador/1_aula'
//Filtro tipo
const filtrarJsFiles = (list)=>list.filter((file)=> file.endsWith(".js"))

fs.readdir(dirPath).then(filtrarJsFiles).then(console.log).catch(console.error)
1
