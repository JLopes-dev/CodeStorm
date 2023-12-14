import { connect } from "mongoose";
import DatabaseInput from "./core/database";
import RouterInput from "./routes/router";
import express from "express";
const runDatabase = new DatabaseInput(connect);


const app = express();
const httpServer = new RouterInput(app);
const port = parseInt(process.env.PORT!) || 3000;

runDatabase.runDB(process.env.DB_URI!).then(() => {
  httpServer.runServer(port);
});
