const express = require("express");
const router = new express.Router();
require("../db/mongoose");

//Load the 'customer' controller.
var customer = require("../controllers/CustomerController");

//handle a get request made to /customer/all.
router.get("/customer/all", customer.displayAllCustomers);

module.exports = router;
