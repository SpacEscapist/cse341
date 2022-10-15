const router = require("express").Router();
const trainersController = require("../controllers/trainers");

// Get all trainers
router.get("/", trainersController.getAllTrainers);
// Get one trainer
router.get("/:id", trainersController.getOneTrainer);
// Create new trainer
router.post("/", trainersController.createTrainer);

module.exports = router;
