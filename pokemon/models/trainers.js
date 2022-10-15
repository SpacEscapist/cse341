const mongoose = require("mongoose");

// Set schema for Trainers data
const TrainersSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    nickname: String,
    gymBadgesCollected: [String],
    pokemonCaught: Number
  },
  { versionKey: false }
);

TrainersSchema.set("collection", "trainers");

module.exports = mongoose.model("Trainers", TrainersSchema);
