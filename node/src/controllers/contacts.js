const Contacts = require("../../db/connect");
const { ObjectId } = require("mongodb");

// Get all contacts
const getAllContacts = async (req, res) => {
  // #swagger.description = "Get all contacts"
  try {
    const allContacts = await Contacts.find();
    res.json(allContacts);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get one contact
const getOneContact = async (req, res) => {
  // #swagger.description = "Get one contact"
  try {
    const contactId = new ObjectId(req.params.id);
    const oneContact = await Contacts.findOne({
      _id: contactId
    });
    res.json(oneContact);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create a new contact
const createContact = async (req, res) => {
  // #swagger.description = "Create new contact"
  try {
    const addContact = new Contacts({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    });
    await addContact.save().then((result) => {
      res.status(201).json(`New contact ID: ${result.id}`);
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update a contact
const updateContact = async (req, res) => {
  // #swagger.description = "Update existing contact"
  try {
    const contactId = new ObjectId(req.params.id);
    const update = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    await Contacts.findOneAndUpdate({ _id: contactId }, update);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete a contact
const deleteContact = async (req, res) => {
  // #swagger.description = "Delete a contact"
  try {
    const contactId = new ObjectId(req.params.id);
    const action = Contacts.deleteOne({ _id: contactId });
    if ((await action).deletedCount > 0) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500).json(action.error);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { getAllContacts, getOneContact, createContact, updateContact, deleteContact };
