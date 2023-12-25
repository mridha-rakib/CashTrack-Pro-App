const express = require("express");
const cors = require("cors");
require("./config/dbConnect");
const accountRoute = require("./routes/accounts/accountRoute");
const transactionsRoute = require("./routes/transactions/transactionsRoute");
const usersRoute = require("./routes/users/usersRoute");

// internal imports
const globalErrHandler = require("./middlewares/globalErrHandler");

const app = express();

//middlewares
app.use(express.json()); //pass incoming data
app.use(cors());
//users route
app.use("/api/v1/users", usersRoute);
//account routes
app.use("/api/v1/accounts", accountRoute);

//transactions route
app.use("/api/v1/transactions", transactionsRoute);

//Error handlers
app.use(globalErrHandler);

//listen to server
const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
