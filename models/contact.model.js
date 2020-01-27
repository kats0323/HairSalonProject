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
    contact_info_1_en: {
        type: String
    },
    contact_info_1_ja: {
        type: String
    },
    contact_info_2_en: {
        type: String
    },
    contact_info_2_ja: {
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
    }
})

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;