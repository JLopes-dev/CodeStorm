import express from 'express'
import dotenv from 'dotenv'
import run from './models/db/db.conn'
import router from './routes/api.routes'

dotenv.config()
const app = express()
const PORT =  process.env.PORT ?? 3000
const routerHandler = new router(app)


run()
 .then(()=>{
    routerHandler.start(PORT as number)
 })