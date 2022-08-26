import { verify } from "../helpers/authentication";

export const checkAuth = (req, res, next) => {
  const hasToken = req.headers.authorization || req.headers.Authorization;
  if (hasToken) {
    next();
  } else {
    return res.send({ message: "User not authorized" });
  }
};
export const isAdmin = (req, res, next) => {
    const hasToken = req.headers.authorization || req.headers.Authorization;
    if (hasToken) {
     const token = hasToken.split(' ')[1]
     const verifyUser = verify(token)

     if(verifyUser.userType === 'admin'){
        next();
     }
    } else {
      return res.send({ message: "Logged user is not administrator" });
    }
  };