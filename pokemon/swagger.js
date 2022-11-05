// To compile swagger file, run - "node swagger.js"
const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Pokemon API",
    description: `This API gets trainer, pokedex, gym, and pokemon game data.
      \n*NOTE*: Some routes will require authorization to test. To test these routes, please log in here https://branden-cse341-pokemon.onrender.com/authorization/login
      \nOnce finished, you may log out here https://branden-cse341-pokemon.onrender.com/authorization/logout`
  },
  host: "",
  schemes: ["http", "https"]
  // securityDefinitions: {
  //   Authorization: {
  //     type: "oauth2",
  //     name: "Authorization",
  //     description: "Log in for authorization",
  //     flows: "implicit"
  //   }
  // },
  // security: [
  //   {
  //     Authorization: []
  //   }
  // ]
};

const outputFile = "swagger-output.json";
const endpointsFiles = ["./app.js"];

/* NOTE: if you use the express Router, you must pass in the 
"endpointsFiles" only the root file where the route starts, 
such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);
