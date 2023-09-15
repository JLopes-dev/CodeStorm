import express from 'express'
import httpReqs from '../controllers/routers.functions';
import Crud from '../controllers/routers.crud';

const Router = express.Router()
const crud = new httpReqs()

Router.use((req: any, res: any, next: any)=>{
    const crud = new Crud()
    next()
  })

Router.get('/api/:name', crud.getHandler);
Router.post('/api/post', crud.postHandler);
Router.delete('/api/delete', crud.deleteHandler);
Router.put('/api/put', crud.putHandler);


export default Router

