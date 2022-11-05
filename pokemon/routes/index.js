const router = require("express").Router();

// Routes
router.use("/", require("./apidocs"));
router.use("/authorization", require("./authorization"));
router.use("/trainers", require("./trainers"));
router.use("/pokedex", require("./pokedex"));
router.use("/gyms", require("./gyms"));
router.use("/games", require("./games"));

// Export route
module.exports = router;
