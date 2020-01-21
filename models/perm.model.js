const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const permSchema = new Schema({
    ja_course: {
        type: String,
    },
    en_course: {
        type: String,
    },
    ja_price: {
        type: String,
    },
    en_price: {
        type: String,
    },
    ja_detail: {
        type: String
    },
    en_detail: {
        type: String
    }

});


const Perm = mongoose.model('Perm', permSchema);

module.exports = Perm;