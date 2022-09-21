// Use the "express" library and use express's built-in Router() function. Set to a variable called "routes"
const routes = require("express").Router();

// Import name.js file from our controllers folder.
const NameController = require("../controllers/contacts");

// Create a route using a GET request for the url at our root path.
// the GET function requires 2 parameters, a path and a function that creates our request/response
routes.get("/", NameController.get_person_name);

// Export route
module.exports = routes;
