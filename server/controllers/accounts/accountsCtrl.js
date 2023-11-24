const Account = require("../../model/Account");
const User = require("../../model/User");
const { AppErr } = require("../../utils/appErr");

//create
const createAccountCtrl = async (req, res, next) => {
  const { name, accountType, initialBalance, notes } = req.body;
  console.log(req.body);
  try {
    const userFound = await User.findById(req.user);
    if (!userFound) return next(new AppErr("user not found", 404));

    const account = await Account.create({
      name,
      initialBalance,
      accountType,
      notes,
      createdBy: req.user,
    });

    userFound.accounts.push(account._id);
    await userFound.save();
    res.json({
      status: "success",
      data: account,
    });
  } catch (error) {
    next(error);
  }
};

//all
const getAccountsCtrl = async (req, res) => {
  try {
    res.json({ msg: "get account route" });
  } catch (error) {
    res.json(error);
  }
};

//single
const getAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "get account route" });
  } catch (error) {
    res.json(error);
  }
};

//delete
const deleteAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "delete route" });
  } catch (error) {
    res.json(error);
  }
};

//update
const updateAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "update route" });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createAccountCtrl,
  getAccountCtrl,
  deleteAccountCtrl,
  updateAccountCtrl,
  getAccountsCtrl,
};
