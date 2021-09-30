const fs = require('fs')
const fileNamePath = "./arquivos_de_respostas_2.txt";
// Escrever algo de saida -- É como o console.log trabqalha por baixo dos panos
//process.stdout.write("Alguma coisa!\n\n\n")

const questions = [ // 1 Array de questões
    "O que eu aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas eu ajudei?"    
]

const ask = (index = 0) =>{ // 2 Criar a função que vai perguntar
    process.stdout.write("\n\n"+questions[index] + " > "); // 3 Vai perguntar na tela escrever na Saida do processo
} 

ask() 

const answers = [] // 8 criando  o array que vai receber as respostas

process.stdin.on("data", data =>{ // 4 on vai ficar ouvindo eventos cada vez que tiver dados vai rodar uma função    
    answers.push(data.toString().trim() + "\n"); // 5 Vou colocar os dados no array // trim remove os espaços
        if(answers.length < questions.length ){  // 9 Loop até terminar as perguntas       
        ask(answers.length) // 10 incrementar o index da função ask
        }else{
        //console.log(answers) // Imprimir as respostas na tela        
        process.exit(); //6 Aqui fecho o processo
    }
})



process.on('exit',()=>{ // O processo vai ficar ouvindo assim que o exit() for chamado, executará essa outra função
    const content =
        ` Bacana Marcio! 
        O que você aprendeu hoje foi: ${answers[0]}
        O que te aborreceu e pderia melhorar foi: ${answers[1]}
        O que te deixou feliz hoje: ${answers[2]}
        Quantas pessoas você ajudou? ${answers[3]} 
        Volte amanhã para novas reflexões!
        `   
   
        fs.writeFileSync(fileNamePath,content);
      
    
})



