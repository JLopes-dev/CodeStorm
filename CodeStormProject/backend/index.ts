import express from 'express'
import dotenv from 'dotenv'
import run from './models/dbConn'
import routerClass from './routes/apiRoutes'

dotenv.config()
const app = express()
const PORT =  process.env.PORT ?? 3000
const routerHandler = new routerClass(app);

const user = process.env.user as string 
const password = process.env.password as string; 

(async ()=>{
  await run(user, password)
   .then(()=>{
  routerHandler.start(PORT as number);
   })
})()
