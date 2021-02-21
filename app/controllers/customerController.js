//Load the 'customer' mongoose model.
const customer = require("mongoose").model("customer");

//Display all customers.
exports.displayAllCustomers = (req, res) => {
  res.json({ Customers: "All customer" });
};
