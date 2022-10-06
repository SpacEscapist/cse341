const express = require("express");
const port = 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const indexRoute = require("./src/routes/index");
const app = express();

require("dotenv/config");

// Middleware
app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", indexRoute);

// Connect to database
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("Connected to MongoDB");
});

// Bind the connection on a specific host and port
app.listen(port, () => {
  console.log(`Server is listening on port:${port}`);
});
