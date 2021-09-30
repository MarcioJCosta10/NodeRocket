
function greatFlagValue(flag){ // 1 criando a função e passando o argumento string flag
    const index = process.argv.indexOf(flag) + 1 //2 percorrendo o array de argumentos do process e devolvendo o --nome que estará na flag + 1 e --greeting 
    return process.argv[index] // 3 retornando o texto da flag
}

export default greatFlagValue; // 4 exportando a função


