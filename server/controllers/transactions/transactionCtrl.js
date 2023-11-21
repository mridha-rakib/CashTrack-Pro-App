//create
const createTransactionCtrl = async (req, res) => {
  try {
    res.json({ msg: "create route" });
  } catch (error) {
    res.json(error);
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
