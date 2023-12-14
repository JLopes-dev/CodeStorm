import jwt from 'jsonwebtoken'
import {Request, Response } from "express";
import {deletedUserModel, userModel} from '../models/userModel';

class JwtAuthorization {
  verifyToken(req: Request, res: Response){
    const user = req.headers.authorization;
    const token = user!.split(" ")[1];
    if (!token) res.status(401).json({ message: `token not allowed. ${user}` });
    return jwt.verify(token!, process.env.JWT_SECRET_KEY!);
  }
}
export class RouterFunctionsCrud {

  async login(req: Request, res: Response) {
    const { name, password } = req.body;
    const foundUser = await userModel.findOne({ name, password });
    if (!foundUser) return res.status(404).json({message: `account not found.`});
    
    const token = jwt.sign({foundUser}, process.env.JWT_SECRET_KEY!);
    res.status(200).json({ message: token });
  }

  async signin(req: Request, res: Response) {
    const { name, password } = req.body;
    
    const foundUser = await userModel.findOne({ name, password });    
    if (foundUser) return res.status(401).json({message: `this account exists.`});
    
    const createdUser = await userModel.create({ name, password });
    const token = jwt.sign({ createdUser }, process.env.JWT_SECRET_KEY!);
    res.status(200).json({ message: token });
  }

  async deleteAccount(req: Request, res: Response) {
   const result = new JwtAuthorization().verifyToken(req,res)
   if (!result) return;

   const {name,password} = req.body
   const deletedUser = await userModel.findOneAndDelete({name, password})
   await deletedUserModel.create(deletedUser)
   res.json({message: `user deleted with sucess.`})
  }

  async updateAccount(req: Request, res: Response) {
    const { name, password, newName, newPassword } = req.body;
    const updatedUser = await userModel.findOneAndUpdate(
      { name, password },
      { name: newName, password: newPassword },
      { returnDocument: "after" }
    );
    res.status(200).json({ message: updatedUser });
  }
}


export class RouterDoesntExists extends RouterFunctionsCrud {
  doesntExists(req: Request, res: Response) {
    res.status(404).json({ message: `router doesnt exists.` });
  }
}
