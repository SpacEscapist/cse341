const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
require("dotenv").config();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
  })
  .use("/", require("./routes"));

// Connect to database
async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
    await app.listen(port);
    console.log(`Server is listening on port:${port}`);
  } catch (error) {
    console.log("Database connection failed.", error);
  }
}
dbConnect();
