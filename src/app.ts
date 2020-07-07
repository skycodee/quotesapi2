// program koji se izvrsava na serveru

import express from 'express';
import quotesRouter from './routing/quotes-routing';
import commentsRouter from './routing/comments-routing';

// Za konekciju nad bazom 
import { dbConfig } from './common/config';
import { createConnection } from 'typeorm';

// Za parsiranje body dijela 
import bodyParser from 'body-parser';

class App {

    serverApp : express.Application;

    constructor(){
        this.serverApp = express();
        this.config();
        this.connectToDB();
        this.routing();
    }

    private config() {
        this.serverApp.use(bodyParser.json());
    }

    // 4 osnovna tipa zahtjeva - GET, POST, PUT, DELETE
    private routing(){
        this.serverApp.use("/quotes", quotesRouter);
        this.serverApp.use("/comments", commentsRouter);
    }

    private connectToDB(){
        createConnection(dbConfig).then(connection => {
            console.log('Successfully connected!');
        }).catch(err => {
            console.log("Error while connecting!");
            console.log(err);
        })
    }

}

let serverInstance = new App().serverApp; 
export default serverInstance;