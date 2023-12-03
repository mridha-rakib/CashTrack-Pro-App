const Account = require("../../model/Account");
const User = require("../../model/User");
const Transaction = require("../../model/Transaction");
const { AppErr } = require("../../utils/appErr");

//create
const createTransactionCtrl = async (req, res, next) => {
  const { name, transactionType, amount, category, notes, account } = req.body;
  try {
    const userFound = await User.findById(req.user);
    if (!userFound) {
      next(new AppErr("user not found", 404));
    }

    const accountFound = await Account.findById(account);
    if (!accountFound) {
      return next(new AppErr("Account not found", 404));
    }

    const transaction = await Transaction.create({
      name,
      transactionType,
      amount,
      category,
      notes,
      account,
      createdBy: req.user,
    });

    accountFound.transactions.push(transaction._id);
    await accountFound.save();

    res.json({
      status: "scuccess",
      data: transaction,
    });
  } catch (error) {
    next(error);
  }
};

//all
const getTransactionsCtrl = async (req, res) => {
  try {
    res.json({ msg: "all route" });
  } catch (error) {
    res.json(error);
  }
};

//single
const getTransactionCtrl = async (req, res) => {
  try {
    res.json({ msg: "get transaction route" });
  } catch (error) {
    res.json(error);
  }
};

//delete
const deleteTransactionCtrl = async (req, res) => {
  try {
    res.json({ msg: "delete route" });
  } catch (error) {
    res.json(error);
  }
};

//update
const updateTransactionCtrl = async (req, res) => {
  try {
    res.json({ msg: "update route" });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createTransactionCtrl,
  getTransactionsCtrl,
  getTransactionsCtrl,
  getTransactionCtrl,
  deleteTransactionCtrl,
  updateTransactionCtrl,
};
