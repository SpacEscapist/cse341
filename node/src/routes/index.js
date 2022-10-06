const router = require("express").Router();

// Middleware
router.use("/contacts", require("./contacts"));
router.use("/api-docs", require("./docs"));

// Current route
router.get("/", (req, res) => {
  res.send("At the index URL");
});

// Export route
module.exports = router;
