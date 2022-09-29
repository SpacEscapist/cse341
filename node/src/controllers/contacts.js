const Contacts = require("../../db/connect");
const { ObjectId } = require("mongodb");

// Get all contacts
const getAllContacts = async (req, res) => {
  try {
    const allContacts = await Contacts.find();
    res.json(allContacts);
  } catch (err) {
    res.json({ message: err });
  }
};

// Get one contact
const getOneContact = async (req, res) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const oneContact = await Contacts.findOne({
      _id: contactId
    });
    res.json(oneContact);
  } catch (err) {
    res.json({ message: err });
  }
};

// Create a new contact
const createContact = async (req, res) => {
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
    res.status(500).json({ message: err });
  }
};

// Update a contact
const updateContact = async (req, res) => {
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
    res.status(500).json({ message: err });
  }
};

// Delete a contact
const deleteContact = async (req, res) => {
  try {
    const contactId = new ObjectId(req.params.id);
    await Contacts.deleteOne({ _id: contactId });
    res.sendStatus(200);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports = { getAllContacts, getOneContact, createContact, updateContact, deleteContact };
