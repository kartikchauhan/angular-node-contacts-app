var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Contact', contactSchema);