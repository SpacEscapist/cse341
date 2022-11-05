const router = require("express").Router();
const trainersController = require("../controllers/trainers");
const { trainersValidation } = require("../middleware/validation");
const { auth, requiresAuth } = require("express-openid-connect");
const appConfig = require("../config/authorize");

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(appConfig));
// Get all trainers
router.get("/", trainersController.getAllTrainers);
// Get one trainer
router.get("/:id", trainersController.getOneTrainer);
// Create new trainer
router.post("/", requiresAuth(), trainersValidation, trainersController.createTrainer);
// Update a trainer
router.put("/:id", requiresAuth(), trainersValidation, trainersController.updateTrainer);
// Delete a trainer
router.delete("/:id", requiresAuth(), trainersController.deleteTrainer);

module.exports = router;
