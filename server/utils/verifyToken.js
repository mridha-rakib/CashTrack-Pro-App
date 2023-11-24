const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
  return jwt.verify(token, "secretKey", (err, decodedData) => {
    if (err) {
      return false;
    } else {
      return decodedData;
    }
  });
};

module.exports = verifyToken;
