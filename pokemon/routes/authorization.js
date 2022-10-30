const router = require("express").Router();
const authorizationController = require("../controllers/authorization");

router.get("/login", authorizationController.login);

module.exports = router;
