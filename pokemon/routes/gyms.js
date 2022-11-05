const router = require("express").Router();
const gymsController = require("../controllers/gyms");
const { gymsValidation } = require("../middleware/validation");
const { auth, requiresAuth } = require("express-openid-connect");
const appConfig = require("../config/authorize");

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(appConfig));
// Get all gyms
router.get("/", gymsController.getAllGyms);
// Get one gym
router.get("/:id", gymsController.getOneGym);
// Create new gym
router.post("/", requiresAuth(), gymsValidation, gymsController.createGym);
// Update a gym
router.put("/:id", requiresAuth(), gymsValidation, gymsController.updateGym);
// Delete a gym
router.delete("/:id", requiresAuth(), gymsController.deleteGym);

module.exports = router;
