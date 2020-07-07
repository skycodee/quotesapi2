import { Request, Response } from 'express';
import { CommentRepository } from '../repositories/comment-repository';

export const insertComment = (request: Request, response: Response) => {
    let commentRepository = new CommentRepository();
    let comment = Object.create(request.body);
    commentRepository.insertComment(comment).then(data => {
        response.send(data);
    }).catch(err => {
        response.send(err);
    })
}