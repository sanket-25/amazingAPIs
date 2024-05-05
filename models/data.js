const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: String,
    phone: String
});

module.exports = mongoose.model('Data', dataSchema);
