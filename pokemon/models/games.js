const mongoose = require("mongoose");

// Set schema for Trainers data
const GamesSchema = mongoose.Schema(
  {
    gameName: String,
    releaseDate: String,
    platform: [String]
  },
  { versionKey: false }
);

GamesSchema.set("collection", "games");

module.exports = mongoose.model("Games", GamesSchema);
