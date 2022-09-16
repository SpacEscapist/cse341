const routes = require("express").Router();

routes.get("/", (req, res) => {
  res.send("Mickey Mouses");
});

module.exports = routes;
