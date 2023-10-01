import express from "express";
import dotenv from "dotenv";
import run from "../models/dbConn";
import mongoose from "mongoose";
import router from "../routes/apiRoutes";
import supertest from 'supertest'
dotenv.config();
const app = express();
const PORT = 3000 ?? process.env.PORT;
const routerHandler = new router(app);

describe('DATABASE AND EXPRESS CONNECTIONS', ()=>{

   test('mongodb server must start', async ()=>{
      await run()
      expect(mongoose.connection.readyState).toBe(1);
      await mongoose.connection.close();  
      
   })


   test('express server must start', async()=>{
    setTimeout(async ()=>{
     const server = routerHandler.start(PORT as number);
     
     const verifyGetRoute = await supertest(app).post("/api/login");
     expect(verifyGetRoute.status).toBe(200);     
     server.close()
    }, 2000)

      })

});

afterAll(()=>{
  console.log(`servers connected with sucess`);
})