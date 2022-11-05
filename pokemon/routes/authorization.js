const router = require("express").Router();
const authorizationController = require("../controllers/authorization");
const { auth, requiresAuth } = require("express-openid-connect");
const appConfig = require("../config/authorize");

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(appConfig));
// Show logged-in or logged-out status
router.get("/", authorizationController.authorize);
// Get profile details from logged-in user
router.get("/profile", requiresAuth(), authorizationController.profile);

module.exports = router;
