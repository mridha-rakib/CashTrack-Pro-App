const express = require("express");
const {
  registerUserCtrl,
  userLoginCtrl,
  userProfileCtrl,
  deleteUserCtrl,
  updateUserCtrl,
} = require("../../controllers/users/usersCtrl");
const isLogin = require("../../middlewares/isLogin");

const usersRoute = express.Router();

//POST/api/v1/users/register

usersRoute.post("/register", registerUserCtrl);
//POST/api/v1/users/login
usersRoute.post("/login", userLoginCtrl);

//GET/api/v1/users/profile/:id
usersRoute.get("/profile", isLogin, userProfileCtrl);

//DELETE/api/v1/users/:id
usersRoute.delete("/:id", deleteUserCtrl);

//PUT/api/v1/users/:id
usersRoute.put("/:id", updateUserCtrl);
module.exports = usersRoute;
