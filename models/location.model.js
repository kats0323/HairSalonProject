const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    street: {
        type: String
    },
    suburb: {
        type: String
    },
    state: {
        type: String
    },
    google: {
        type: String
    },
    post_code: {
        type: Number
    },
    shop_photo1: {
        type: String
    },
    shop_info_1_en: {
        type: String
    },
    shop_info_1_ja: {
        type: String
    },
    shop_info_2_en: {
        type: String
    },
    shop_info_2_ja: {
        type: String
    },
    shop_extra_info_en: {
        type: String
    },
    shop_extra_info_ja: {
        type: String
    }

})

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;