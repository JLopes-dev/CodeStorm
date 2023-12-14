import { connect } from "mongoose";
import DatabaseInput from "./core/database";
import RouterInput from "./routes/router";
import express from "express";
import dotenv from 'dotenv';
const runDatabase = new DatabaseInput(connect);


const app = express();
const httpServer = new RouterInput(app);
const port = parseInt(process.env.PORT!) || 3000;

if(process.env.NODE_ENV === 'dev'){
  dotenv.config({{path: './config/.env.dev'}})
}
runDatabase.runDB(process.env.DB_URI!).then(() => {
  httpServer.runServer(port);
});
