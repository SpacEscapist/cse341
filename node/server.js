// Require express library to create an express server
const express = require("express");
// Call the express function to set up our server
const app = express();
const port = 3000;

// Require the routes folder when our browser is at the root URL
app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Server is listening on port:${port}`);
});
