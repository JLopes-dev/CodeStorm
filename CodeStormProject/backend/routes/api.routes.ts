import express, { Express } from "express";
import httpReqs from "../controllers/routers.functions";
import cors from "cors";

const Router = express.Router();
const crud = new httpReqs();

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
  
  routes() {
    Router.get("/api/:name", crud.getHandler);
    Router.post("/api/post", crud.postHandler);
    Router.delete("/api/delete", crud.deleteHandler);
    Router.put("/api/put", crud.putHandler);
    this.app.use(Router);
  }

  start(PORT: number) {
    this.configRoutes()
    this.routes();
    this.app.listen(PORT, () => console.log(`server loading on PORT ${PORT}`));
  }
}
