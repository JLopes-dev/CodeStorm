import userModel from "../models/dbModels";

interface accountModel {
  name: string;
  password: string;
}

class Crud {
  public async read(user: accountModel) {
    return (await userModel.findOne(user)) as unknown as Document;
  }

  public async put(user: accountModel, newUser: accountModel) {
    return await userModel.findOneAndUpdate(user, newUser, {
      returnDocument: "after",
    });
  }

  public async delete(user: accountModel) {
    return await userModel.findOneAndDelete(user);
  }

  public async post(user: accountModel) {
    const verifyifExists = await this.read(user);
    if (!verifyifExists) return null;
    return await userModel.create(user);
  }
}

const crud = new Crud();
type httpType = (req: any, res: any) => Promise<void>;

export default class HttpRequisitions {

  public withHandlingErrors(handler: httpType) {
    return async (req: any, res: any) => {
      try {
        handler(req, res);
      } catch (error) {
        console.error(error);
      }
    };
  }

  public async getHandler(req: any, res: any) {    
    const user = await crud.read(req.body);    
    res.status(user ? 200 : 404).json({ message: user ?? `user not found \n value: ${user}` });
  }

  public async deleteHandler(req: any, res: any) {
    const user = await crud.delete(req.body);
    res.status(user ? 200 : 404).json({ message: user ?? `user not found \n value: ${user}` });
  }

  public async postHandler(req: any, res: any) {
    const user = await crud.post(req.body);
    res.status(user ? 200 : 406).json({ message: user ?? `user wasnt accepted \n value: ${user}.` });
  }

  public async putHandler(req: any, res: any) {
    const { oldName, oldPassword, name, password } = req.body;
    const user = await crud.put({ name: oldName, password: oldPassword }, { name, password });
    res.status(user ? 200 : 404).json({ message: user ?? `user doesn't exists ${user}` });
  }
}
