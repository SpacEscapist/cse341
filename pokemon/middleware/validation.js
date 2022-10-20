const { check } = require("express-validator");

module.exports.trainersValidation = [
  check("firstName", "First name is required. Must be at least 2 characters long.")
    .isString()
    .isLength({ min: 2 })
    .notEmpty(),
  check("lastName", "Last name is required. Must be at least 2 characters long.")
    .isString()
    .isLength({ min: 2 })
    .notEmpty(),
  check(
    "nickname",
    "Nickname must contain all letters. If no nickname, value must be an empty string."
  ).isString(),
  check(
    "gymBadgesCollected",
    "Must be in array format. If no badges, value must be an empty array."
  ).isArray(),
  check("pokemonCaught", "Must be a numeric value. If none, enter 0.").isNumeric().notEmpty()
];

module.exports.pokedexValidation = [
  check("pokemonName", "Pokemon name is required. Must be at least 3 characters long.")
    .isString()
    .isLength({ min: 3 })
    .notEmpty(),
  check("element", "Element type is required. Must be in array format.").isArray().notEmpty(),
  check("abilities", "Must include at least one ability name. Must be in array format.")
    .isArray()
    .notEmpty(),
  check("healthPower", "Health points required. Value must be numeric.").isNumeric().notEmpty(),
  check("attack", "Attack number is required. Value must be numeric.").isNumeric().notEmpty(),
  check("defense", "Defense number is required. Value must be numeric.").isNumeric().notEmpty(),
  check(
    "evolutions",
    "Must be in array format. If no evolutions, value must be an empty array."
  ).isArray()
];
