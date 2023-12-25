const mongoose = require("mongoose");

//connect

const dbConnect = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/incomExpensessDB");
    console.log("Db connected Successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

dbConnect();
