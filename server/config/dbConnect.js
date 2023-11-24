const mongoose = require("mongoose");

//connect

const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rakibmahmudmridha:RK6cZ7UJAd7p3V6@incomeexpensesdb.3ziwai4.mongodb.net/"
    );
    console.log("Db connected Successfully");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

dbConnect();
