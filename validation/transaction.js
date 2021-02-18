const Validator = require('validator');
const validText = require("./valid-text");

module.exports = function validateTransactionInput(data) {
  let errors = {};

  data.description = validText(data.description) ? data.description : '';

  if (Validator.isEmpty(data.category)) {
    errors.category = "Category is required";
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = "Description is required";
  }

  if (Validator.isEmpty(data.value)) {
    errors.value = "Value is required";
  }
  
  if (Validator.isDecimal(data.value.toString())) {
    errors.value = "Value needs to be a decimal number";
  }

  if (Validator.isEmpty(data.choice)) {
    errors.choice = "Deposit/withdraw choice is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }

}