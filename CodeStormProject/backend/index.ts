import express from 'express'
import dotenv from 'dotenv'
import run from './models/dbConn'
import router from './routes/apiRoutes'

dotenv.config()
const app = express()
const PORT =  process.env.PORT ?? 3000
const routerHandler = new router(app)


run()
 .then(()=>{
    routerHandler.start(PORT as number)
 })