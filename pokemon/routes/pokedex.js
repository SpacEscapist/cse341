const router = require("express").Router();
const pokedexController = require("../controllers/pokedex");
const { pokedexValidation } = require("../middleware/validation");

// Get all pokemon
router.get("/", pokedexController.getAllPokemon);
// Get one pokemon
router.get("/:id", pokedexController.getOnePokemon);
// Create new pokemon
router.post("/", pokedexValidation, pokedexController.createPokemon);
// Update a pokemon
router.put("/:id", pokedexValidation, pokedexController.updatePokemon);
// Delete a pokemon
router.delete("/:id", pokedexController.deletePokemon);

module.exports = router;
