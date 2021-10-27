const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeesSchema = new Schema({
    name: {type: String, require: true, max: 60},
    lastName_p: {type: String, require: true, max: 40},
    lastName_m: {type: String, require: true, max: 40},
    phone: {type: String, require: true, max: 15},
    email: {type: String, require: false, max: 40},
    addres: {type: String, require: false, max: 150}
  });
  module.exports = mongoose.model('employees', EmployeesSchema);