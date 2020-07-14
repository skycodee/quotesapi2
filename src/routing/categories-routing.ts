import express from 'express';
import * as categoryController from '../controllers/category-controller';

const categoryRouter = express.Router();

categoryRouter.route('').get(categoryController.getCategories);

export default categoryRouter;