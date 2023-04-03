import express from 'express';
import { allArticle, articleCreate, updateArticle, deleteArticle, getArticle } from '../controller/article.controller';
import { isAdmin } from '../middleware/checkAuth';
const articleRoute = express.Router();

articleRoute.post('/create',articleCreate);
articleRoute.put('/update/:id',updateArticle);
articleRoute.get('/all',allArticle)
articleRoute.get('/view/:id',getArticle);
articleRoute.delete('/delete/:id',deleteArticle);
articleRoute.get('/',(req,res)=>{
return res.send({
    message:"Article Route Works"})
});


export {articleRoute};