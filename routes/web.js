const express = require('express');
const contactsController = require('../controllers/contactsController');
const router = express.Router();


router.get('/', contactsController.getHomePage);


router.post('/add-contact', contactsController.postNewContact);


router.post('/delete-contact', contactsController.deleteContact);

module.exports = router; 