const Games = require("../models/games");
const { ObjectId } = require("mongodb");
const { validationResult } = require("express-validator");

// Get all games
const getAllGames = async (req, res) => {
  // #swagger.tags = ["Game Requests"]
  // #swagger.description = "Get all games"
  try {
    const allGames = await Games.find();
    res.json(allGames);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get one game by ID
const getOneGame = async (req, res) => {
  // #swagger.tags = ["Game Requests"]
  // #swagger.description = "Get one game via ID"

  // Check for valid ID
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json("Game ID is not valid. Please use a valid ID.");
  }

  try {
    const gameId = new ObjectId(req.params.id);
    const oneGame = await Games.findOne({
      _id: gameId
    });
    res.json(oneGame);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Create new game
const createGame = async (req, res) => {
  // #swagger.tags = ["Game Requests"]
  // #swagger.description = "Create new game - (NOTE: This route requires authorization. Please see API description above for authorization details)"

  // Check for input errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const addGame = new Games({
      gameName: req.body.gameName,
      releaseDate: req.body.releaseDate,
      platform: req.body.platform
    });
    await addGame.save().then((result) => {
      res.status(201).json(`New game ID: ${result.id}`);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a game by ID
const updateGame = async (req, res) => {
  // #swagger.tags = ["Game Requests"]
  // #swagger.description = "Update a game via ID - (NOTE: This route requires authorization. Please see API description above for authorization details)"

  // Check for valid ID
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json("Game ID is not valid. Please use a valid ID.");
  }

  // Check for input errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const gameId = new ObjectId(req.params.id);
    const update = {
      gameName: req.body.gameName,
      releaseDate: req.body.releaseDate,
      platform: req.body.platform
    };
    await Games.findOneAndUpdate({ _id: gameId }, update);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a game by ID
const deleteGame = async (req, res) => {
  // #swagger.tags = ["Game Requests"]
  // #swagger.description = "Delete a game via ID - (NOTE: This route requires authorization. Please see API description above for authorization details)"

  // Check for valid ID
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json("Game ID is not valid. Please use a valid ID.");
  }

  try {
    const gameId = new ObjectId(req.params.id);
    const action = Games.deleteOne({ _id: gameId });
    if ((await action).deletedCount > 0) {
      res.sendStatus(200);
    } else {
      res.status(500).json("An error occurred while attempting to delete.");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAllGames, getOneGame, createGame, updateGame, deleteGame };
