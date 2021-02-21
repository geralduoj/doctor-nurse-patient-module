const express = require("express");
const router = new express.Router();

//Load the 'index' controller.
var index = require("../controllers/indexController");

//handle a get request made to root path
router.get("/", index.basicInfo);

module.exports = router;
