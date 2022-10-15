const Pokedex = require("../models/pokedex");
const { ObjectId } = require("mongodb");

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

module.exports = { getAllPokemon, getOnePokemon, createPokemon };
