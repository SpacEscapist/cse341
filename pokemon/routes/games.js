const router = require("express").Router();
const gamesController = require("../controllers/games");
const { gamesValidation } = require("../middleware/validation");
const { auth, requiresAuth } = require("express-openid-connect");
const appConfig = require("../config/authorize");

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(appConfig));
// Get all games
router.get("/", gamesController.getAllGames);
// Get one game
router.get("/:id", gamesController.getOneGame);
// Create new game
router.post("/", requiresAuth(), gamesValidation, gamesController.createGame);
// Update a game
router.put("/:id", requiresAuth(), gamesValidation, gamesController.updateGame);
// Delete a game
router.delete("/:id", requiresAuth(), gamesController.deleteGame);

module.exports = router;
