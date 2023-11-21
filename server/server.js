const express = require("express");

const app = express();

// middleware

// routes

// Error handlers

// listen to server
const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`server is up and running on port: ${PORT}`));
