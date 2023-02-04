import express, { Application, RequestHandler } from 'express';

const app = express();

function initMiddlewares() {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
}

//logging
//error handler
//routes with auth middleware