const express = require("express");
const isLogin = require("../../middlewares/isLogin");
const {
  createAccountCtrl,
  deleteAccountCtrl,
  getAccountCtrl,
  updateAccountCtrl,
  getAccountsCtrl,
} = require("../../controllers/accounts/accountsCtrl");

const accountRoute = express.Router();

//POST/api/v1/accounts
accountRoute.post("/", isLogin, createAccountCtrl);

//GET/api/v1/accounts/:id
accountRoute.get("/:id", isLogin, getAccountCtrl);

//DELETE/api/v1/accounts/:id
accountRoute.delete("/:id", isLogin, deleteAccountCtrl);

//PUT/api/v1/accounts/:id
accountRoute.put("/:id", isLogin, updateAccountCtrl);

//GET/api/v1/accounts
accountRoute.get("/", isLogin, getAccountsCtrl);
module.exports = accountRoute;
