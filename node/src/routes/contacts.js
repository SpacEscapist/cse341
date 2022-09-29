const router = require("express").Router();
const contactsController = require("../controllers/contacts");

// Get all contacts
router.get("/", contactsController.getAllContacts);
// Get one contact
router.get("/:id", contactsController.getOneContact);
// Create new contact
router.post("/", contactsController.createContact);
// Update contact
router.put("/:id", contactsController.updateContact);
// Delete contact
router.delete("/:id", contactsController.deleteContact);

module.exports = router;
