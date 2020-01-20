const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    phone_number: {
        type: Number
    },
    line_id: {
        type: String
    },
    facebook: {
        type: String
    },
    instagram: {
        type: String
    },
    contact_info_en: {
        type: String
    },
    contact_info_ja: {
        type: String
    },
    contact_extra_info_en: {
        type: String
    },
    contact_extra_info_ja: {
        type: String
    },
    opening_hors_mon: {
        type: String
    },
    opening_hors_tue: {
        type: String
    },
    opening_hors_wed: {
        type: String
    },
    opening_hors_thu: {
        type: String
    },
    opening_hors_fri: {
        type: String
    },
    opening_hors_sat: {
        type: String
    },
    opening_hors_sun: {
        type: String
    },
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
    // shop_photo2: {
    //     type: String
    // },
    shop_info_en: {
        type: String
    },
    shop_info_ja: {
        type: String
    },
    shop_extra_info_en: {
        type: String
    },
    shop_extra_info_ja: {
        type: String
    }

})

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;