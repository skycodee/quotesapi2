import { getManager } from "typeorm"
import { Comment } from "../models/comment-model"

export class CommentRepository {

    insertComment = (comment: Comment) => {
        return getManager().getRepository(Comment).insert(comment);
    }

}