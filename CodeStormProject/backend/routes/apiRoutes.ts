import express, { Express } from "express";
import HttpRequisitions from "../controllers/routersFunctions";
import cors from "cors";

const Router = express.Router();

export default class router {
  private app: Express;

  constructor(app: Express) {
    this.app = app;
  }

  configRoutes() {
    this.app.use(express.json());

    this.app.use(
      cors({
        origin: `exp://10.0.0.109:8081`,
        optionsSuccessStatus: 200,
      })
    );
  }
  
  setupRoutes() {
    const http = new HttpRequisitions();

    Router.post("/api/login", http.withHandlingErrors(http.getHandler));
    Router.post("/api/signin", http.withHandlingErrors(http.postHandler));
    Router.delete("/api/delete",http.withHandlingErrors(http.deleteHandler));
    Router.put("/api/put", http.withHandlingErrors(http.putHandler));
    Router.use((req,res)=>res.status(404).json({message: `route not found ${404}`}))
    this.app.use(Router);
  }

  start(PORT: number) {
    this.configRoutes();
    this.setupRoutes();
    return this.app.listen(PORT, () => console.log(`server loading on PORT ${PORT}`));
    
  }




}
