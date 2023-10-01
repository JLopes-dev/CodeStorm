import express from 'express'
import dotenv from 'dotenv'
import run from './models/dbConn'
import routerClass from './routes/apiRoutes'

dotenv.config()
const app = express()
const PORT =  process.env.PORT ?? 3000
const routerHandler = new routerClass(app);


(async ()=>{
  await run();
  routerHandler.start(PORT as number);
})()
