const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: { type: String, required: true },
    email: String,
    password: String,
});

module.exports = model('user', userSchema);
