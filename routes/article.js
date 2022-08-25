import express from 'express';
import { articleCreate } from '../controller/article.controller';
const articleRoute = express.Router();



articleRoute.post('/create',articleCreate);
articleRoute.get('/:id',(req,res)=>{

});
articleRoute.post('/create',(req,res)=>{

});
articleRoute.get('/',(req,res)=>{
return res.send({
    message:"Article Route Works"})
});
articleRoute.delete('/article/:id',(req,res)=>{

});

export {articleRoute};