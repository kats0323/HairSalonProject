const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const priceSchema = new Schema({
    course: {
        type: String,
    },
    price: {
        type: String,
    }

});


const Price = mongoose.model('Price', priceSchema);

module.exports = Price;