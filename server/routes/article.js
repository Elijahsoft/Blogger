import express from 'express';
import { allArticle, articleCreate, oneArticle, deleteArticle } from '../controller/article.controller';
import { isAdmin } from '../middleware/checkAuth';
const articleRoute = express.Router();



articleRoute.post('/create',articleCreate);
articleRoute.get('/all',allArticle)
articleRoute.get('/one/?id:id',oneArticle)
articleRoute.delete('/delete/:id',isAdmin,deleteArticle);
articleRoute.get('/',(req,res)=>{
return res.send({
    message:"Article Route Works"})
});


export {articleRoute};