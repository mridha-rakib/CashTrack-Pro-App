const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "secretKey", { expiresIn: "10d" });
};

module.exports = generateToken;
