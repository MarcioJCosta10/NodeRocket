
// Aprender a usar o process e sua lista de agumentos
//console.log(process)   //1  Ao imprimir trará um monte de informações no seu objeto
console.log(process.argv) // 2 o argv está dentro do process e traz um array com os argumentos que estou rodando no node 
                          // 3 para testar rode node process Marcio Costa e veremos que agora o array tem mais argumentos
                          
// 4 Posso usar os argumentos que vão para dentro do array argv
console.log(`Ola seu nome é `+ process.argv[3] +" " + process.argv[5])

//5 Aprendendo a usar flags para passar os argumentos no process
// Ao rodar essa linha: node process --name "Macio Jose" --greeting "Tudo bem com você?"
// Veremos que dentro do argv tenho agora as tags --name e --greeting
