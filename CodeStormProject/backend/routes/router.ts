import express, {Router} from "express";
import {RouterDoesntExists, RouterFunctionsCrud} from "../controller/routerFunctions";
import cors from 'cors'

 class RouterApi {
  private router: Router;
  private rfc = new RouterFunctionsCrud();
  private rfde = new RouterDoesntExists();

  constructor(router: Router) {
    this.router = router;
  }

  protected routerHandler() {
    this.router.post("/login", this.rfc.login);
    this.router.post("/signin", this.rfc.signin);
    this.router.delete("/deleteAccount", this.rfc.deleteAccount);
    this.router.put("/updateAccount", this.rfc.updateAccount);
    this.router.use(this.rfde.doesntExists);
    return this.router;
  }
}

export default class RouterInput extends RouterApi {
  private app = express();

  private startRouter() {
    const router = this.routerHandler()
    return this.app.use(router);   
  }

  private configRouter(){
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended: true}))
    this.app.use(
      cors({
        origin: "exp://10.73.113.162:8081",
      })
    );
  }

  public runServer(PORT: number){
    this.configRouter()
    this.startRouter()
    this.app.listen(PORT, ()=>{
        console.log(`server running on PORT ${PORT}`)
    })
  }
}