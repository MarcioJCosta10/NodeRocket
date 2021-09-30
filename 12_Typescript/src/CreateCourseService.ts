/*
    O que nosso curso terá?
    name - string
    duration - number
    educator - string
*/


// Criar a interface que será uma casca de tudo que terá nossa função
interface Course{
    name: string;
    duration?: number;
    educator: string;
}


class CreateCourseService{
    constructor(){

    }
    // Funcção que cria o curso, passar os parametros via interface com desestruração
    execute({duration=8, educator, name}:Course){
        console.log(name, duration, educator)
    }
}

export default new CreateCourseService;