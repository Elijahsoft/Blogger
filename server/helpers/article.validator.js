import Joi from "joi";
export const validateArticle = (articleData) => {
  const articleRules = Joi.object({
    title: Joi.string().min(5).max(100).required(),
    subtitle: Joi.string().min(5).max(150).required(),
    body: Joi.string().min(5).max(1000).required(),
    UserId: Joi.number().integer().required(),
  });
  return articleRules.validate(articleData);
};
