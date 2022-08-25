import Joi from 'joi';
export const validateArticle = (articleData) =>{

    const articleRules = Joi.object({
        title:Joi.string().min(5).max(30).required(),
        body:Joi.string().min(5).max(50).required(),
        UserId:Joi.number().integer().required()
        
    });
    return articleRules.validate(articleData);
};