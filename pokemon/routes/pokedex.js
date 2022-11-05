const router = require("express").Router();
const pokedexController = require("../controllers/pokedex");
const { pokedexValidation } = require("../middleware/validation");
const { auth, requiresAuth } = require("express-openid-connect");
const appConfig = require("../config/authorize");

// auth router attaches /login, /logout, and /callback routes to the baseURL
router.use(auth(appConfig));
// Get all pokemon
router.get("/", pokedexController.getAllPokemon);
// Get one pokemon
router.get("/:id", pokedexController.getOnePokemon);
// Create new pokemon
router.post("/", requiresAuth(), pokedexValidation, pokedexController.createPokemon);
// Update a pokemon
router.put("/:id", requiresAuth(), pokedexValidation, pokedexController.updatePokemon);
// Delete a pokemon
router.delete("/:id", requiresAuth(), pokedexController.deletePokemon);

module.exports = router;
