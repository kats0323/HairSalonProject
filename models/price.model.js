const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const priceSchema = new Schema({
    ja_course: {
        type: String,
    },
    en_course: {
        type: String,
    },
    price: {
        type: String,
    },
    ja_detail: {
        type: String
    },
    en_detail: {
        type: String
    }

});


const Price = mongoose.model('Price', priceSchema);

module.exports = Price;