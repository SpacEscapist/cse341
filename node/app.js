const express = require("express");
const port = 3000;
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

require("dotenv").config();

const indexRoute = require("./src/routes/index");

// Middleware
app.use(bodyParser.json());
app.use("/", indexRoute);

// Connect to database
mongoose.connect(process.env.DB_CONNECTION);

// Bind the connection on a specific host and port
app.listen(port, () => {
  console.log(`Database connected and server is listening on port:${port}`);
});
