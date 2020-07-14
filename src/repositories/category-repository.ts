import { getManager } from "typeorm"
import { Category } from "../models/category-model"

export class CategoryRepository {

    getCategories = () => {
        return getManager().getRepository(Category).find({relations: ['quotes']});
    }

}