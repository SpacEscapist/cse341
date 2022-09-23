const Contacts = require("../../db/connect");
const { ObjectId } = require("mongodb");

// Get all contacts
const getAllContacts = async (req, res, next) => {
  try {
    const allContacts = await Contacts.find();
    res.json(allContacts);
  } catch (err) {
    res.json({ message: err });
  }
};

// Get one contact
const getOneContact = async (req, res, next) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const oneContact = await Contacts.findOne({
      _id: contactId,
    });
    res.json(oneContact);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = { getAllContacts, getOneContact };
