const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const susSchema = new Schema({
    sus: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true,
    }
});

const Sussies = mongoose.model('sussie', susSchema);

module.exports = Sussies;
