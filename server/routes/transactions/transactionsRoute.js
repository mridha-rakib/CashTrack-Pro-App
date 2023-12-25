const express = require("express");
const {
  createTransactionCtrl,
  getTransactionsCtrl,
  getTransactionCtrl,
  deleteTransactionCtrl,
  updateTransactionCtrl,
} = require("../../controllers/transactions/transactionCtrl");
const isLogin = require("../../middlewares/isLogin");

const transactionsRoute = express.Router();

//POST/api/v1/transactions
transactionsRoute.post("/", isLogin, createTransactionCtrl);

//GET/api/v1/transactions
transactionsRoute.get("/all", isLogin, getTransactionsCtrl);

//GET/api/v1/transactions/:id
transactionsRoute.get("/:id", getTransactionCtrl);

//DELETE/api/v1/transactions/:id
transactionsRoute.delete("/:id", isLogin, getTransactionCtrl);

//PUT/api/v1/transactions/:id
transactionsRoute.put("/:id", isLogin, updateTransactionCtrl);

module.exports = transactionsRoute;
