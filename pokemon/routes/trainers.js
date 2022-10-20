const router = require("express").Router();
const trainersController = require("../controllers/trainers");
const { trainersValidation } = require("../middleware/validation");

// Get all trainers
router.get("/", trainersController.getAllTrainers);
// Get one trainer
router.get("/:id", trainersController.getOneTrainer);
// Create new trainer
router.post("/", trainersValidation, trainersController.createTrainer);
// Update a trainer
router.put("/:id", trainersValidation, trainersController.updateTrainer);
// Delete a trainer
router.delete("/:id", trainersController.deleteTrainer);

module.exports = router;
