const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
      type: Number,
      required: true
    },
    friends: [
      { type : mongoose.ObjectId, ref: 'User' }
    ]
})
module.exports = User = mongoose.model("users", UserSchema);