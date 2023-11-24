const getTokenFromHeader = require("../utils/getTokenFromHeader");
const verifyToken = require("../utils/verifyToken");
const { AppErr } = require("../utils/appErr");

const isLogin = (req, res, next) => {
  const token = getTokenFromHeader(req);

  const decodedUser = verifyToken(token);
  req.user = decodedUser.id;

  if (!decodedUser) {
    return next(new AppErr("Invalid/Expire Token, Please login again", 401));
  }
  next();
};

module.exports = isLogin;
