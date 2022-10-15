const router = require("express").Router();

// Routes
router.use("/", require("./apidocs"));
router.use("/trainers", require("./trainers"));
router.use("/pokedex", require("./pokedex"));

// Export route
module.exports = router;
