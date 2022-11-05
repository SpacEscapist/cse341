const Gyms = require("../models/gyms");
const { ObjectId } = require("mongodb");
const { validationResult } = require("express-validator");

// Get all gyms
const getAllGyms = async (req, res) => {
  // #swagger.tags = ["Gym Requests"]
  // #swagger.description = "Get all gyms"
  try {
    const allGyms = await Gyms.find();
    res.json(allGyms);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get one gym by ID
const getOneGym = async (req, res) => {
  // #swagger.tags = ["Gym Requests"]
  // #swagger.description = "Get one gym via ID"

  // Check for valid ID
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json("Gym ID is not valid. Please use a valid ID.");
  }

  try {
    const gymId = new ObjectId(req.params.id);
    const oneGym = await Gyms.findOne({
      _id: gymId
    });
    res.json(oneGym);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Create new gym
const createGym = async (req, res) => {
  // #swagger.tags = ["Gym Requests"]
  // #swagger.description = "Create new gym - (NOTE: This route requires authorization. Please see API description above for authorization details)"

  // Check for input errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const addGym = new Gyms({
      gymBadgeName: req.body.gymBadgeName,
      gymLocation: req.body.gymLocation,
      gymLeaderName: req.body.gymLeaderName,
      gymPokemonType: req.body.gymPokemonType
    });
    await addGym.save().then((result) => {
      res.status(201).json(`New gym ID: ${result.id}`);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a gym by ID
const updateGym = async (req, res) => {
  // #swagger.tags = ["Gym Requests"]
  // #swagger.description = "Update a gym via ID - (NOTE: This route requires authorization. Please see API description above for authorization details)"

  // Check for valid ID
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json("Gym ID is not valid. Please use a valid ID.");
  }

  // Check for input errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const gymId = new ObjectId(req.params.id);
    const update = {
      gymBadgeName: req.body.gymBadgeName,
      gymLocation: req.body.gymLocation,
      gymLeaderName: req.body.gymLeaderName,
      gymPokemonType: req.body.gymPokemonType
    };
    await Gyms.findOneAndUpdate({ _id: gymId }, update);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a gym by ID
const deleteGym = async (req, res) => {
  // #swagger.tags = ["Gym Requests"]
  // #swagger.description = "Delete a gym via ID - (NOTE: This route requires authorization. Please see API description above for authorization details)"

  // Check for valid ID
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json("Gym ID is not valid. Please use a valid ID.");
  }

  try {
    const gymId = new ObjectId(req.params.id);
    const action = Gyms.deleteOne({ _id: gymId });
    if ((await action).deletedCount > 0) {
      res.sendStatus(200);
    } else {
      res.status(500).json("An error occurred while attempting to delete.");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAllGyms, getOneGym, createGym, updateGym, deleteGym };
