const keys = require("../config/keys");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    let authorization = req.get("Authorization");

    if (!authorization) {
      req.isAuth = false;
      next();
    }

    let token = authorization.split(" ")[1];
    console.log({token});

    if (!token || token === "") {
      req.isAuth = false;
      next();
    }

    let decodedToken = await jwt.verify(token, keys.JWT_SECRET);

    if (!decodedToken) {
      req.isAuth = false;
      next();
    }

    req.isAuth = true;
    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    console.log(error);
    next();
  }
};
