const router = require("express").Router();
const pokedexController = require("../controllers/pokedex");

// Get all pokemon
router.get("/", pokedexController.getAllPokemon);
// Get one pokemon
router.get("/:id", pokedexController.getOnePokemon);
// Create new pokemon
router.post("/", pokedexController.createPokemon);

module.exports = router;
