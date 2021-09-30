import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";


// Função que receberá de quem está requisitando e criar no nosso serviço o curso.

export function createCourse(req: Request, res: Response){
    CreateCourseService.execute({
        name: 'NodeJS',
        educator: 'Marcio',
        duration: 10           
    })

    CreateCourseService.execute({
        name: 'ReactJS',
        educator: 'Marcio'  
    })

    return res.json({message:'Courses createds'})
}