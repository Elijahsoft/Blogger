import { validateUser } from "../helpers/user.validator";
import { User } from "../migration/user.model";
import Joi from "joi";

export const signup = async (req, res) => {
  //check validataion

  const { error, value } = validateUser(req.body);

  if (error) {
    return res.send({ error: error.details[0].message });
  }
  await User.create(req.body);
  return res.send({ message: "new user is created" });
};
export const testjoi = (req, res) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    birthyear: Joi.number().integer().min(1970).max(2013),
  });
  const dataToValidate = {
    name: "chris",
    birthyea: 1971,
  };
  const { error, value } = schema.validate(dataToValidate);
  if (error) {
    return res.send({ error: error.details[0].message });
  }
  return res.send(JSON.stringify(result));
};
export const getAllUsers = async (req, res) => {
  const user = await User.findAll();
  return res.send({ user });
};

export const signin = async (req, res) => {
  const { password, email } = req.body;
  const user = await User.findOne({
    where: {
      email,
      password,
    },
  });
  if(!user){
    return res.send({error:'Invalid email or password', status: 400})
  }
  return res.send({ user });
};
