import {Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
//import { PostgresCategoriesRepository } from '../repositories/PostgresCategoriesRepository';

import { CreateCategoryService } from '../modules/cars/services/CreateCategoryService';

const categoriesRepository = new CategoriesRepository();

const categoriesRoutes = Router();

categoriesRoutes.post('/', (request, response) => {
    const { id, name, description } = request.body;
    //const createCategoryService = new PostgresCategoriesRepository(categoriesRepository);
    const createCategoryService = new CreateCategoryService(categoriesRepository);

    createCategoryService.execute({ name, description })

    return response.status(201).json({ message: 'Category created sucessfull' });

})

categoriesRoutes.get('/', (request, response) => {
    const all = categoriesRepository.list();
    return response.json(all)
})

export { categoriesRoutes };