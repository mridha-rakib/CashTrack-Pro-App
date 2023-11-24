const bcrypt = require("bcryptjs");

// Internal imports
const User = require("../../model/User");
const { AppErr, appErr } = require("../../utils/appErr");
const generateToken = require("../../utils/generateToken");
const verifyToken = require("../../utils/verifyToken");

//Register
const registerUserCtrl = async (req, res, next) => {
  const { fullname, password, email } = req.body;
  try {
    //check if email exist
    const userFound = await User.findOne({ email });
    if (userFound) {
      next(new AppErr("User Already Exist", 400));
    }

    //check if fields are empty

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create user
    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });
    res.json({
      status: "success",
      fullname: user.fullname,
      email: user.email,
      id: user._id,
    });
  } catch (error) {
    next(new Error(error));
  }
};

//login
const userLoginCtrl = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const userFound = await User.findOne({ email });
    if (!userFound) {
      return next(new AppErr("Invalid login credentials", 400));
    }

    const isPasswordMatch = await bcrypt.compare(password, userFound.password);
    if (!isPasswordMatch) {
      return next(new AppErr("Invalid login credentials", 400));
    }

    res.json({
      status: "success",
      fullname: userFound.fullname,
      id: userFound._id,
      token: generateToken(userFound._id),
    });
  } catch (error) {
    next(error);
  }
};

//profile
const userProfileCtrl = async (req, res, next) => {
  try {
    const user = await User.findById(req.user);
    res.status(200).json({
      user,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

//delete
const deleteUserCtrl = async (req, res) => {
  try {
    res.json({ msg: "delete route" });
  } catch (error) {
    res.json(error);
  }
};

//update
const updateUserCtrl = async (req, res) => {
  try {
    res.json({ msg: "update route" });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  registerUserCtrl,
  userLoginCtrl,
  userProfileCtrl,
  deleteUserCtrl,
  updateUserCtrl,
};
