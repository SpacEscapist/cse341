// Create a schema for our database
const mongoose = require("mongoose");
const ContactSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    favoriteColor: String,
    birthday: String
  },
  { versionKey: false }
);

ContactSchema.set("collection", "contacts");

module.exports = mongoose.model("Contacts", ContactSchema);
