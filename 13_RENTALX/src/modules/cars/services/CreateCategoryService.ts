import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;

}

class CreateCategoryService {

    constructor(private categoriesRepository: ICategoriesRepository) { 
        
    }

    execute({ name, description }: IRequest): void {

        const categoriesRepository = new CategoriesRepository();
        const categoryAlreadyExists = this.categoriesRepository.findByName(name)

        if (categoryAlreadyExists) {
            throw new Error('Ops! Category Alread Exists')
        }

        this.categoriesRepository.create({ name, description })

    }
}

export { CreateCategoryService }