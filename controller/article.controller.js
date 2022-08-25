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