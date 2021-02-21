const express = require("express");
const router = new express.Router();

//Load the 'customer' controller.
var customer = require("../controllers/CustomerController");

//handle a get request made to root path
router.get("/customer/all", customer.displayAllCustomers);

module.exports = router;
