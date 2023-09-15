import Crud from './routers.crud'
const apiCrud = new Crud()

interface RequestBody {
    name: string;
    password: string;
  }

interface RequestBodyforUpdate extends RequestBody {
    oldName: string,
    oldPassword: string
  }

  type userType =  Document | null | undefined


class HttpReqs {
    private jsonResponse(res: any, user: userType, message: string, httpOK: number, httpError: number) {
      res.status(user ? httpOK : httpError).json({message: user ?? message}) 
    }

    public getHandler = async (req: any,res: any)=> {
      const {name}: RequestBody = req.params
      const user = await apiCrud.read(name)
      this.jsonResponse(res, user, `user not found \n value: ${user}`, 200, 404)
    }

    public deleteHandler = async (req: any,res: any)=> {
      const {name, password}: RequestBody = req.body
      const user = await apiCrud.delete({name, password})
      this.jsonResponse(res, user, `user not found \n value: ${user}`, 200, 404)
    }

    public postHandler = async (req: any,res: any)=> {
      const {name, password}: RequestBody = req.body 
      const user = await apiCrud.post({ name, password }) as Document
      this.jsonResponse(res, user, `user wasnt accepted \n value: ${user}.`, 200, 406)
    }

    public putHandler = async (req: any,res: any)=> {
      const {oldName, oldPassword, name, password}: RequestBodyforUpdate = req.body
      const user = await apiCrud.put({oldName, oldPassword, name, password});
      this.jsonResponse(res,user, `user doesn't exists ${user}`, 200, 404)
    }
}

export class ApiMiddlewares {
    public verifyAccount(){

    }
}


export default HttpReqs