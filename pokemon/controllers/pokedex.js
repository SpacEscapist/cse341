const Pokedex = require("../models/pokedex");
const { ObjectId } = require("mongodb");
const { validationResult } = require("express-validator");

// Get all pokemon
const getAllPokemon = async (req, res) => {
  // #swagger.description = "Get all pokemon"
  try {
    const allPokemon = await Pokedex.find();
    res.json(allPokemon);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Get one pokemon
const getOnePokemon = async (req, res) => {
  // #swagger.description = "Get one pokemon via ID"

  // Check for valid ID
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json("Pokemon ID is not valid. Please use a valid ID.");
  }

  try {
    const pokemonId = new ObjectId(req.params.id);
    const onePokemon = await Pokedex.findOne({
      _id: pokemonId
    });
    res.json(onePokemon);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Create new pokemon
const createPokemon = async (req, res) => {
  // #swagger.description = "Create new pokemon"

  // Check for input errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const addPokemon = new Pokedex({
      pokemonName: req.body.pokemonName,
      elementType: req.body.elementType,
      abilities: req.body.abilities,
      healthPower: req.body.healthPower,
      attack: req.body.attack,
      defense: req.body.defense,
      evolutions: req.body.evolutions
    });
    await addPokemon.save().then((result) => {
      res.status(201).json(`New pokemon ID: ${result.id}`);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Update a pokemon by ID
const updatePokemon = async (req, res) => {
  // #swagger.description = "Update a pokemon via ID"

  // Check for valid ID
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json("Pokemon ID is not valid. Please use a valid ID.");
  }

  // Check for input errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const pokemonId = new ObjectId(req.params.id);
    const update = {
      pokemonName: req.body.pokemonName,
      elementType: req.body.elementType,
      abilities: req.body.abilities,
      healthPower: req.body.healthPower,
      attack: req.body.attack,
      defense: req.body.defense,
      evolutions: req.body.evolutions
    };
    await Pokedex.findOneAndUpdate({ _id: pokemonId }, update);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).json(error);
  }
};

// Delete a pokemon by ID
const deletePokemon = async (req, res) => {
  // #swagger.description = "Delete a pokemon via ID"

  // Check for valid ID
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(400).json("Pokemon ID is not valid. Please use a valid ID.");
  }

  try {
    const pokemonId = new ObjectId(req.params.id);
    const action = Pokedex.deleteOne({ _id: pokemonId });
    if ((await action).deletedCount > 0) {
      res.sendStatus(200);
    } else {
      res.status(500).json("An error occurred while attempting to delete.");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { getAllPokemon, getOnePokemon, createPokemon, updatePokemon, deletePokemon };
