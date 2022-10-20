const Trainers = require("../models/trainers");
const { ObjectId } = require("mongodb");
const { validationResult } = require("express-validator");

// Get all trainers
const getAllTrainers = async (req, res) => {
  // #swagger.description = "Get all trainers"
  try {
    const allTrainers = await Trainers.find();
    res.json(allTrainers);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get one trainer by ID
const getOneTrainer = async (req, res) => {
  // #swagger.description = "Get one trainer via ID"

  // Check for valid ID
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json("Trainer ID is not valid. Please use a valid ID.");
  }

  try {
    const trainerId = new ObjectId(req.params.id);
    const oneTrainer = await Trainers.findOne({
      _id: trainerId
    });
    res.json(oneTrainer);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Create new trainer
const createTrainer = async (req, res) => {
  // #swagger.description = "Create new trainer"

  // Check for input errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const addTrainer = new Trainers({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      nickname: req.body.nickname,
      gymBadgesCollected: req.body.gymBadgesCollected,
      pokemonCaught: req.body.pokemonCaught
    });
    await addTrainer.save().then((result) => {
      res.status(201).json(`New trainer ID: ${result.id}`);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a trainer by ID
const updateTrainer = async (req, res) => {
  // #swagger.description = "Update a trainer via ID"

  // Check for valid ID
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json("Trainer ID is not valid. Please use a valid ID.");
  }

  // Check for input errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const trainerId = new ObjectId(req.params.id);
    const update = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      nickname: req.body.nickname,
      gymBadgesCollected: req.body.gymBadgesCollected,
      pokemonCaught: req.body.pokemonCaught
    };
    await Trainers.findOneAndUpdate({ _id: trainerId }, update);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a trainer by ID
const deleteTrainer = async (req, res) => {
  // #swagger.description = "Delete a trainer via ID"

  // Check for valid ID
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json("Trainer ID is not valid. Please use a valid ID.");
  }

  try {
    const trainerId = new ObjectId(req.params.id);
    const action = Trainers.deleteOne({ _id: trainerId });
    if ((await action).deletedCount > 0) {
      res.sendStatus(200);
    } else {
      res.status(500).json("An error occurred while attempting to delete.");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAllTrainers, getOneTrainer, createTrainer, updateTrainer, deleteTrainer };
