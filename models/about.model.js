const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    en_introduction: {
        type: String
    },
    ja_introduction: {
        type: String
    },
    photo: {
        type: String
    }
});


const About = mongoose.model('About', aboutSchema);

module.exports = About;