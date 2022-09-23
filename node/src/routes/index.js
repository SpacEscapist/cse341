const router = require("express").Router();
const contactsRoute = require("./contacts");

// Middleware
router.use("/contacts", contactsRoute);

// Current route
router.get("/", (req, res) => {
  res.send("At the index URL");
});

// Export route
module.exports = router;
