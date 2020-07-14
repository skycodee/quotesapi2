import { getManager } from "typeorm"
import { Quote } from "../models/quote-model"

export class QuoteRepository {

    getAllQuotes = () => {
        return getManager().getRepository(Quote).find({relations: ['comments', 'categories']});
    }

    getQuoteByID = (id: number) => {
        return getManager().getRepository(Quote).findOne(id, { relations: ['comments'] });
    }

    insertQuote = (quote:Quote) => {
        return getManager().getRepository(Quote).insert(quote);
    } 

    updateQuote = (quote:Quote) => {
        return getManager().getRepository(Quote).save(quote);
    }

    deleteQuote = (id: number) => {
        return getManager().getRepository(Quote).delete(id);
    }

    getQuotesCustomQuery = () => {
        return getManager().query(`SELECT * FROM quotes WHERE id = ?`, [1]);
    }

}