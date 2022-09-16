// Require express library to create an express server
const express = require("express");
// Call the express function to set up our server
const app = express();
const port = 3000;

// Create a route using a GET request for the url at our root path.
// the GET function requires 2 parameters, a path and a function with a request(req) and response(res) parameter
app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Server is listening on port:${port}`);
});
