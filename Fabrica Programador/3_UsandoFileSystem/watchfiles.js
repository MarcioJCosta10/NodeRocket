const fs = require('fs/promises')

const fileNamePath = "C:/Users/NMULTIFIBRA/OneDrive/Desktop/Fabrica Programador/3_FS/arquivos_base.txt";

(async ()=> {
    try{
    const watcher = fs.watch(fileNamePath);

        for await (const event of watcher){
            console.log(event);
        }
}catch(err){
    if(err.name === "AbortError")return ;
    throw err ;
}
}
)();