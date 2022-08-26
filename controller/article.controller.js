import { Article } from '../migration/article.model';
import { validateArticle } from '../helpers/article.validator';

export const articleCreate = async (req,res) =>{

    // check Validation
    const {error, value} = validateArticle(req.body);
    if(error){
        return res.send({error:error.details[0].message})
    }
    await  Article.create(req.body);
    return  res.send({message:"New Article Created"});
   }
   export const testJoi = (req,res) =>{
    const schema = Joi.object({

    });
   }
   export const deleteArticle = async (req,res)=>{
    const id = req.params.id;

   await Article.destroy({
        where :{
            id: id
        }
    });
    
    return res.send({message: " Article deleted"});

   }
   export const allArticle = async (req,res) =>{
    const article = await Article.findAll();

    return res.send({article})
   }