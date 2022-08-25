import Joi from "joi";

export const validateUser = (userData) => {
  // rules to be followed for user data from clients

  const userRules = Joi.object({
    fullNames: Joi.string().min(3).max(30).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().required().min(6),
  });

  return userRules.validate(userData); // user data from clients
};
