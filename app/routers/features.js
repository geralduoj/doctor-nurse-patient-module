const express = require("express");
const router = new express.Router();

//Get all features.
router.get("/features", (req, res) => {
  res.json({
    //What can be done with customer.
    Customer: {
      //Get all the customer.
      getAll: "/customer/all",
    },
  });
});

module.exports = router;
