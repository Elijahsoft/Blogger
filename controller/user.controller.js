import { validateUser } from "../helpers/user.validator";
import { User } from "../migration/user.model";
import Joi from "joi";
import { signToken } from "../helpers/authentication";

export const signup = async (req, res) => {
  //check validataion

  const { error, value } = validateUser(req.body);

  if (error) {
    return res.send({ error: error.details[0].message });
  }
  await User.create(req.body);
  return res.send({ message: "new user is created" });
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
  if (!user) {
    return res.send({ error: "Invalid email or password", status: 400 });
  }
  return res.send({ user, token: signToken(user) });
};
