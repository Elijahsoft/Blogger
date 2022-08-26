import jwt from "jsonwebtoken";
export const signToken = ({ email, fullNames, userType }) => {
  //=>const {email, fullNames} = userInfo
  const token = jwt.sign(
    {
      email,
      fullNames,
      userType
    },
    "secret",
    { expiresIn: "1h" }
  );
  return token;
};
export const verify = (token) => {
  return jwt.verify(token, "secret", function (err, decoded) {
    return decoded;
  });
};
