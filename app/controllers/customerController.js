//Load the 'customer' mongoose model.
const customerModel = require("../models/CustomerModel");

//Display all customers.
exports.displayAllCustomers = async (req, res) => {
  try {
    //Find all documents.
    let allCustomers = await customerModel.find({});
    res.status(200).send({ allCustomers });
  } catch (e) {
    //Log Errors.
    res.status(400).send(e);
  }
};
