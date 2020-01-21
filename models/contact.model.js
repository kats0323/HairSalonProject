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
    opening_hors_en: {
        type: String
    },
    opening_hors_ja: {
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
<<<<<<< HEAD
=======
    },
    shop_extra_info_en: {
        type: String
    },
    shop_extra_info_ja: {
        type: String
>>>>>>> 4f018f763f74f5103e55cd412764678ef170b3e3
    }

})

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;