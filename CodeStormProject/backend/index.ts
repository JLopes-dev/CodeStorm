import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import run from './models/db/db.conn'
import Router from './routes/api.routes'

dotenv.config()
const app = express()
const PORT =  process.env.PORT ?? 3000

app.use(express.json())

app.use(cors({
   origin: `exp://10.0.0.109:8081`,
   optionsSuccessStatus: 200
}))

run()
 .then(()=>{
    console.log(`database loading...`)
    app.use(Router)
    app.listen(PORT, ()=>console.log(`server loading on PORT ${PORT}`))
 })