const router = require("express").Router();
const contactsController = require("../controllers/contacts");

// Get all contacts
router.get("/", contactsController.getAllContacts);
// Get one contact
router.get("/:id", contactsController.getOneContact);

module.exports = router;
