import express from 'express';
import * as quotesController from './../controllers/quotes-controller';

const quotesRouter = express.Router();

// CRUD - CREATE, READ, UPDATE, DELETE 

// 1. Dovlacenje svih entiteta nekog tipa iz DB
// 3. Unos entiteta
// 4. Update entiteta 
quotesRouter.route('').get(quotesController.getAllQuotes)
                      .post(quotesController.insertQuote)
                      .put(quotesController.updateQuote); 

                  
// 2. Dovlacenje jednog specificnog entiteta iz DB 
// 5. Brisanje entiteta 
quotesRouter.route('/:id').get(quotesController.getQuoteByID)
                          .delete(quotesController.deleteQuote);

//TEST ZA custom query
quotesRouter.route('/custom/query').get(quotesController.getQuotesCustomQuery);

export default quotesRouter;

