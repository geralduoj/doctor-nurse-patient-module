// Load the Mongoose module and Schema object
const mongoose = require("mongoose");

//Load validator.
const { isEmail } = require("validator");

const customerSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: {
    type: String,
    unique: true,
    required: true,
    //Validate that the email is correct.
    validate(value) {
      if (!isEmail(value)) {
        return "Email is invalid.";
      }
    },
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    trim: true,
  },
});
//This is where you specify what you would like to return.
customerSchema.methods.toJSON = function () {
  let customerProfile = this;
  let customerObject = customerProfile.toObject();

  //Delete what you do not want to return using the attributes.
  delete customerObject._id;
  delete customerObject.password;
  delete customerObject.__v;
  return customerObject;
};

const customer = mongoose.model("customer", customerSchema);

module.exports = customer;
