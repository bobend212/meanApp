const mongoose = require('mongoose');

const recordSchema = mongoose.Schema({
    title: { type: String, required: true },
    measure: { type: String, required: true } 
});

module.exports = mongoose.model('Record', recordSchema);