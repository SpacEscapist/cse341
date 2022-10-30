const router = require("express").Router();

router.get("/login", (req, res) => {
  res.send("login endpoint/router");
});

module.exports = router;
