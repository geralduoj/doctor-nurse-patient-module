const { Schema, model } = require("mongoose");
const  { isEmail, isCreditCard } = require("validator");

const customerSchema = new Schema({
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

const customer = model("customer", customerSchema);

module.exports = customer;
