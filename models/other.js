const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ExampleSchema = new Schema({
    street: {
        type: String,
        required: true
    },
    age: {
      type: Number,
      required: true
  }
})
module.exports = Example = mongoose.model("examples", ExampleSchema);