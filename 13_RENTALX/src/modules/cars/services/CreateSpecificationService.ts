import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";
//import { SpecificationRepository } from "../repositories/SpecificationRepository";

interface IRequest{
    name: string;
    description: string;
}

class CreateSpecificationService{
    constructor(private specificationRepository: ISpecificationsRepository){

    }

    execute({name, description}:IRequest):void{
        //const specificationRepository = new SpecificationRepository();
        const specificationAlreadExists = this.specificationRepository.findByName(name)
        if(specificationAlreadExists){
            throw new Error('Ops! Specification Alread Exists')
        }

    this.specificationRepository.create({name, description})
    }
    
}

export {CreateSpecificationService}