const Trainers = require("../models/trainers");
const { ObjectId } = require("mongodb");

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

// Get one trainer
const getOneTrainer = async (req, res) => {
  // #swagger.description = "Get one trainer via ID"
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

module.exports = { getAllTrainers, getOneTrainer, createTrainer };
