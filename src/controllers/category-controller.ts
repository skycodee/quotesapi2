import { Request, Response } from 'express';
import { CategoryRepository } from '../repositories/category-repository';

export const getCategories = (request: Request, response: Response) => {
    let categoryRepo = new CategoryRepository();

    categoryRepo.getCategories().then(data => {
        response.send(data);
    }).catch(err => {
        response.send(err);
    })
}