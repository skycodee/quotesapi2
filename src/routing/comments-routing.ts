import express from 'express';
import * as commentController from '../controllers/comment-controller';

const commentRouter = express.Router();

commentRouter.route('').post(commentController.insertComment);

export default commentRouter;