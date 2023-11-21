//create
const createAccountCtrl = async (req, res) => {
  try {
    res.json({ msg: "create route" });
  } catch (error) {
    res.json(error);
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
