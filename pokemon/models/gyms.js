const mongoose = require("mongoose");

// Set schema for Trainers data
const GymsSchema = mongoose.Schema(
  {
    gymBadgeName: String,
    gymLocation: String,
    gymLeaderName: String,
    gymPokemonType: String
  },
  { versionKey: false }
);

GymsSchema.set("collection", "gyms");

module.exports = mongoose.model("Gyms", GymsSchema);
