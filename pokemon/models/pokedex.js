const mongoose = require("mongoose");

// Set schema for Pokedex data
const PokedexSchema = mongoose.Schema(
  {
    pokemonName: String,
    elementType: [String],
    abilities: [String],
    healthPower: Number,
    attack: Number,
    defense: Number,
    evolutions: [String]
  },
  { versionKey: false }
);

PokedexSchema.set("collection", "pokedex");

module.exports = mongoose.model("Pokedex", PokedexSchema);
