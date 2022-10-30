const router = require("express").Router();

// Routes
router.use("/", require("./apidocs"));
router.use("/trainers", require("./trainers"));
router.use("/pokedex", require("./pokedex"));
router.use("/authorization", require("./authorization"));

// Export route
module.exports = router;
